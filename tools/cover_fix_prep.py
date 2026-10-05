"""为「一剑劈开」原图准备两次编辑要喂给 GPT 的文件。

用法：python3 tools/cover_fix_prep.py <原图路径> [输出目录，默认 out/edit]

生成：
  skirt-mask.png      第一步：裙底局部重绘的 mask，和原图同尺寸，透明的地方就是要重画的地方
  skirt-preview.png   用红色标出 mask 范围，喂之前先确认位置对不对
  outpaint-canvas.png 第二步：2560×1440 画布，修好的图放正中，左右留空
  outpaint-mask.png   第二步的 mask，左右两侧透明
  mock-16x9.png       左右用模糊填充的示意图，只用来预览排字，不是成品

第二步要用第一步修好的图重新跑一次本脚本，生成新的 outpaint-canvas.png。
"""

import math
import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter

# 裙底区域：按原图宽高的比例写，原图是任何尺寸都能用。位置不对就改这四个数
SKIRT = {"cx": 0.490, "cy": 0.4665, "rx": 0.0997, "ry": 0.0718, "angle_deg": -41}
CANVAS = (2560, 1440)


def ellipse_points(w: int, h: int) -> list[tuple[float, float]]:
    cx, cy = SKIRT["cx"] * w, SKIRT["cy"] * h
    rx, ry = SKIRT["rx"] * w, SKIRT["ry"] * h
    a = math.radians(SKIRT["angle_deg"])
    pts = []
    for i in range(72):
        t = 2 * math.pi * i / 72
        x, y = rx * math.cos(t), ry * math.sin(t)
        pts.append((cx + x * math.cos(a) - y * math.sin(a), cy + x * math.sin(a) + y * math.cos(a)))
    return pts


def skirt_files(img: Image.Image, out: Path) -> None:
    w, h = img.size
    hole = Image.new("L", (w, h), 0)
    ImageDraw.Draw(hole).polygon(ellipse_points(w, h), fill=255)
    mask = Image.new("RGBA", (w, h), (0, 0, 0, 255))
    mask.putalpha(Image.eval(hole, lambda v: 255 - v))
    mask.save(out / "skirt-mask.png")

    tint = Image.new("RGBA", (w, h), (232, 56, 31, 0))
    tint.putalpha(Image.eval(hole, lambda v: v * 110 // 255))
    Image.alpha_composite(img.convert("RGBA"), tint).convert("RGB").save(out / "skirt-preview.png")


def outpaint_files(img: Image.Image, out: Path) -> None:
    cw, ch = CANVAS
    scale = ch / img.height
    sharp = img.convert("RGBA").resize((round(img.width * scale), ch), Image.LANCZOS)
    x = (cw - sharp.width) // 2

    canvas = Image.new("RGBA", CANVAS, (0, 0, 0, 0))
    canvas.paste(sharp, (x, 0))
    canvas.save(out / "outpaint-canvas.png")

    mask = Image.new("RGBA", CANVAS, (0, 0, 0, 0))
    mask.paste(Image.new("RGBA", sharp.size, (0, 0, 0, 255)), (x, 0))
    mask.save(out / "outpaint-mask.png")

    # 预览用：把原图拉满整个画布再狠狠模糊、压暗，当左右两侧的示意
    cover_scale = cw / img.width
    filler = img.convert("RGB").resize((cw, round(img.height * cover_scale)), Image.LANCZOS)
    top = (filler.height - ch) // 2
    filler = filler.crop((0, top, cw, top + ch)).filter(ImageFilter.GaussianBlur(40))
    filler = Image.eval(filler, lambda v: v * 6 // 10)
    filler.paste(sharp.convert("RGB"), (x, 0))
    filler.save(out / "mock-16x9.png")


def main() -> None:
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    src = Path(sys.argv[1])
    out = Path(sys.argv[2]) if len(sys.argv) > 2 else Path("out/edit")
    out.mkdir(parents=True, exist_ok=True)
    img = Image.open(src)
    skirt_files(img, out)
    outpaint_files(img, out)
    print(f"{src} ({img.width}×{img.height}) -> {out}/")


if __name__ == "__main__":
    main()
