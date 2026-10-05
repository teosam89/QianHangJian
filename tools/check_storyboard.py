"""Check the storyboard parts: shot tiling, lyric characters at their frames, impact-frame density.

Usage (from the repo root): python tools/check_storyboard.py [part numbers…]
"""
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
T = json.load(open(ROOT / 'song' / 'timeline.json', encoding='utf-8'))
PARTS = {1: (0, 360), 2: (361, 1076), 3: (1077, 1633), 4: (1634, 1813), 5: (1814, 2520), 6: (2521, 3146),
         7: (3147, 3703), 8: (3704, 3928), 9: (3929, 4635), 10: (4636, 5170), 11: (5171, 5548), 12: (5549, 6328)}
HEAD = re.compile(r'^#{2,5}\s*(S\d{2}-\d{2,3}[a-z]?)\s*·\s*f0*(\d+)\s*[–-]\s*f0*(\d+)\s*·\s*(\d+)\s*f', re.M)


def check(n: int) -> list[str]:
    hits = sorted((ROOT / 'storyboard').glob(f'{n:02d}-*.md'))
    p = hits[0] if hits else ROOT / 'storyboard' / f'{n:02d}.md'
    if not p.exists():
        return [f'part {n:02d}: missing']
    text = p.read_text(encoding='utf-8')
    a, b = PARTS[n]
    out = []
    shots = [(m.group(1), int(m.group(2)), int(m.group(3)), int(m.group(4))) for m in HEAD.finditer(text)]
    if not shots:
        return [f'part {n:02d}: no shot headers parsed']
    cur = a
    for sid, s, e, d in shots:
        if s != cur:
            out.append(f'{sid}: starts f{s}, expected f{cur} ({"gap" if s > cur else "overlap"})')
        if e - s + 1 != d:
            out.append(f'{sid}: f{s}–f{e} is {e - s + 1} f, header says {d}')
        cur = e + 1
    if cur != b + 1:
        out.append(f'part {n:02d}: shots end at f{cur - 1}, expected f{b}')
    # lyric characters at their frames
    for L in T['lines']:
        for c, t in zip(L['chars'], L['char_times']):
            f = round(t * 30)
            if a <= f <= b and not re.search(re.escape(c) + r'\s*f?0*' + str(f) + r'\b', text):
                out.append(f'lyric {L["text"]}: {c} f{f} not found as "{c}f{f}"')
    # impact frames per second
    imp = sorted({int(x) for x in re.findall(r'f0*(\d+)[^\n]{0,40}?impact frame', text, re.I)})
    for i in range(len(imp)):
        win = [x for x in imp if imp[i] <= x < imp[i] + 30]
        if len(win) > 3:
            out.append(f'impact frames: {len(win)} within 1 s from f{imp[i]}: {win}')
            break
    return [f'part {n:02d}: {len(shots)} shots, {len(text.splitlines())} lines'] + out


if __name__ == '__main__':
    ns = [int(x) for x in sys.argv[1:]] or list(PARTS)
    for n in ns:
        for line in check(n):
            print(line)
