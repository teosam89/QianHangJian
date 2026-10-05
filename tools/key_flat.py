"""Key out the flat background of a generated picture by connectivity (PLAYBOOK §5.5).

Usage: python tools/key_flat.py <in.png> <out.png> [--tol 12] [--pocket 4.8]

The background is every pixel within --tol of the border's median colour that connects to the image border, plus
enclosed pockets of that colour whose mean distance to it is under --pocket (cel-shaded white cloth shadows measure
above that and stay). Edge pixels get a soft alpha from their colour distance, and the grey is taken back out of
their colour so no fringe is left.
"""

import argparse

import numpy as np
from PIL import Image
from scipy import ndimage


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("src")
    ap.add_argument("dst")
    ap.add_argument("--tol", type=float, default=12.0)
    ap.add_argument("--pocket", type=float, default=4.8)
    args = ap.parse_args()

    rgb = np.asarray(Image.open(args.src).convert("RGB")).astype(np.float32)
    h, w, _ = rgb.shape
    border = np.concatenate([rgb[0], rgb[-1], rgb[:, 0], rgb[:, -1]])
    bg = np.median(border, axis=0)
    dist = np.linalg.norm(rgb - bg, axis=2)

    near = dist < args.tol
    labels, n = ndimage.label(near, structure=np.ones((3, 3)))
    edge_labels = np.unique(np.concatenate([labels[0], labels[-1], labels[:, 0], labels[:, -1]]))
    keyed = np.isin(labels, edge_labels[edge_labels > 0])
    means = ndimage.mean(dist, labels, index=np.arange(1, n + 1))
    pockets = [i + 1 for i, m in enumerate(means) if m < args.pocket and (i + 1) not in edge_labels]
    keyed |= np.isin(labels, pockets)

    # Soft edge: a band two pixels wide round the subject takes its alpha from the colour distance.
    alpha = np.where(keyed, 0.0, 1.0)
    band = ndimage.binary_dilation(keyed, iterations=2) & ~ndimage.binary_erosion(keyed, iterations=1)
    soft = np.clip((dist - args.tol * 0.5) / (args.tol * 2.5), 0.0, 1.0)
    alpha = np.where(band, soft, alpha)

    # Take the background back out of semi-transparent pixels.
    a = alpha[..., None]
    fg = np.where(a > 0.02, (rgb - (1 - a) * bg) / np.maximum(a, 0.02), rgb)
    out = np.dstack([np.clip(fg, 0, 255), alpha * 255]).astype(np.uint8)
    Image.fromarray(out, "RGBA").save(args.dst)

    print(f"{args.src}: {w}x{h}, background {bg.round().astype(int).tolist()}, "
          f"{keyed.mean() * 100:.1f}% keyed, {len(pockets)} enclosed pockets keyed -> {args.dst}")


if __name__ == "__main__":
    main()
