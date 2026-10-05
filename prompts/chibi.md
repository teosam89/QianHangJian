# 千行剑 — chibi art: step 1, the reference sheet

The MV draws 千行 only as a chibi (owner, round 2). Every chibi drawing in `STORYBOARD.md` is checked against one
approved chibi reference sheet, so that sheet comes first. The owner generates by hand in ChatGPT (round 3) and pushes
the PNG; the sheet prompts for the rest of the drawings follow once the storyboard is approved.

Sources: `notes/acting-design.md` §2–3 (R0 and the bible), `notes/fight-design.md` §10.1 (two three-quarter views and
the sword alone), `STYLE_BIBLE.md` §3–4. Method: tokentoken's `prompts.md`, which came out right first time (one
conversation, message 0 with no image, then the sheet).

## In ChatGPT

1. Open **one new conversation** and keep it for every chibi image of this film (consistency).
2. **Message 0:** attach `refs/01-turnaround.png` and `refs/02-sword.png`, in that order, and paste the bible below.
   ChatGPT should reply in text only. Do not attach `refs/03-style-cover.png` (full proportions and a low angle) or
   any v1 sheet. Before sending, check `refs/01-turnaround.png` once more against STYLE_BIBLE §3: the chibi inherits any
   left/right mistake in it.
3. **Message 1:** paste the reference-sheet prompt. Check the result against the checklist below. Fix one wrong cell
   with ChatGPT's 标注 edit rather than a new generation (at most one retry).
4. Save it as `images/00_chibi_sheet.png` and push it (below). Claude checks it again before the next sheets.

### Message 0 — the bible (attach 01-turnaround, 02-sword)

```text
I'm making an anime music video and need a set of CHIBI STICKER illustrations of my original character Qianhang, shown in the attached turnaround sheet; the second image is her sword. I'll ask for them one at a time. Keep her design identical to the attached sheet in every image. Don't generate an image for this message; just confirm.

CHARACTER: Qianhang, a sword spirit who is also a virtual idol singer, drawn as a chibi.
- Hair: glossy black hair with a blue sheen in a long high ponytail tied with a big cinnabar-red ribbon bow; two long ribbon tails hang down to the backs of her knees; the last third of the ponytail fades into glowing cyan fibre-optic strands; soft side bangs; two small cyan hair clips shaped like a pair of chevrons.
- Face: soft round face, big bright cyan eyes, a confident little smirk.
- Her own LEFT eye (the eye on the RIGHT side of the picture when she faces the viewer) wears a small translucent cyan monocle; its thin white frame curves around her left ear into a slim headset microphone near her mouth.
- Her own RIGHT arm (on the LEFT side of the picture when she faces the viewer) is a slender, glossy pearl-white cybernetic arm from the shoulder down with glowing cyan seam lines; her right shoulder is bare.
- Outfit: a white cross-collar top with cinnabar-red trim; her LEFT arm wears one wide, flowing hanfu sleeve that hangs past her hand; a black waist sash tied with a red cord knot; a white pleated skirt ending just above the knees with a pale cyan circuit-line hem and white fitted shorts underneath; white socks ending just below the knees; short white boots with cyan soles.
- Sword (only when a prompt gives it to her, always in her cybernetic right hand unless the prompt says otherwise): oversized, about as long as she is tall; a translucent glass blade with glowing cyan light lines inside; a dark gunmetal crossguard bent like a return-key arrow with cyan edges; a grip wrapped in red cord; a small jade disc pommel with a long red tassel. Exactly as in the attached sword sheet.

STYLE for every image: cute chibi sticker art like LINE or WeChat stickers, about 2.5 to 3 heads tall, big head, small body, thick clean dark outlines, flat bright cel colours with minimal soft shading, glossy eyes, expressive and funny. Every figure has a thick white sticker border (die-cut outline) around it.

RULES for every image: a perfectly flat, uniform pure magenta background (#FF00FF) with no shadow, floor, gradient or scenery; eye-level views; exactly two arms and two hands with five fingers each; her design is asymmetric and is never mirrored: the monocle is always on her own left eye, the cybernetic arm is always her own right arm, the wide sleeve is always on her own left arm; glow only inside her hair tips, monocle, arm seams and blade, with no halos, trails or effects around her; no text, letters, numbers, logos, speech bubbles, watermark or signature anywhere.
```

### Message 1 — the reference sheet → `images/00_chibi_sheet.png`

```text
Image 1, landscape 3:2. Chibi reference sheet of Qianhang, same design as the attached turnaround sheet.
TOP ROW: four full-body views side by side at exactly the same scale and height, feet on one baseline, standing relaxed with a small confident smile, no sword:
(1) front view;
(2) three-quarter view facing the LEFT edge of the picture, so her monocle eye and her wide sleeve are on the side toward the viewer;
(3) three-quarter view facing the RIGHT edge of the picture, so her pearl-white cybernetic arm and bare right shoulder are on the side toward the viewer;
(4) back view: the cybernetic arm on the right side of the picture, the wide sleeve on the left side, the red bow with its two long ribbon tails and the ponytail ending in cyan strands.
BOTTOM ROW: three head-and-shoulders expressions, all in three-quarter view facing the left edge of the picture: smug (one eyebrow raised, half-lidded eyes, smirk); flustered (blushing, pouting, face turned away, eyes glancing back at the viewer); gentle (soft smile, eyes half closed). At the right end of the bottom row, her sword alone lying horizontally with the point to the right, about as long as she is tall, in the same sticker style.
A thick white sticker border around every figure, head and the sword, with clear magenta space between them. Flat pure magenta #FF00FF background everywhere. No text.
```

### Checklist (from notes/acting-design.md §3)

1. Front: the monocle is on the eye on screen-right, and its white frame wraps that ear into a headset mic.
2. Front: the pearl-white cybernetic arm with cyan seams is on screen-left, its shoulder bare, no sleeve on it.
3. Front: one wide hanfu sleeve, on the arm on screen-right only.
4. Facing left: monocle eye and sleeve near. Facing right: cybernetic arm and bare shoulder near.
5. Back: cybernetic arm on screen-right, sleeve on screen-left; two long ribbon tails; cyan hair tips.
6. The collar reads as a "y"; two cyan chevron clips; black sash with a red knot; white pleated skirt with a cyan hem
   line and white shorts under it; white socks below the knee; white boots with cyan soles.
7. 2.5–3 heads tall, the same in all four views; the cover's face (round, cyan eyes, smirk), not the v1 face.
8. Two arms, five fingers per hand, no text, flat magenta, a closed white border round every figure; the sword shows
   the ⏎-shaped crossguard.

Fine to simplify: fewer pleats, the circuit embroidery as one cyan line, plain chevron clips, a shorter tassel.
Not fine: losing the monocle or mic, a sleeve on the right arm, sleeves on both arms, a covered right shoulder, swapped
sides, losing the ribbon tails or the cyan hair tips.

### Pushing the image (PowerShell)

```powershell
cd C:\Users\qiany\devC\VideoProduce\qianhangjian
git pull origin claude/affectionate-tesla-nn440b
New-Item -ItemType Directory -Force images | Out-Null
Copy-Item "$HOME\Downloads\<the downloaded file>.png" images\00_chibi_sheet.png
git add images/00_chibi_sheet.png
git commit -m "Add the chibi reference sheet"
git push origin HEAD:claude/affectionate-tesla-nn440b
```

## Next

After the storyboard is approved, this file gets the rest: the sheets for every chibi drawing the storyboard uses (the
registry plus the new `N…` drawings), the dragon's ink studies, the backgrounds and the props, each with the images to
attach.
