# 角色「千行」提示词（v2 · 虚拟歌姬 × 剑灵）

规则、标志特征和左右检查见 [STYLE_BIBLE.md](../STYLE_BIBLE.md)。出图顺序：① 三视图 → ② 剑 → ③ 表情 → ④ 姿势。① 和 ② 可以同时出。

## ① 三视图（母图）

`2560×1440` · `quality: high` · 参考图：无（不要传 v1 旧图）。先出 4 张，挑最好的一张。

```text
Character turnaround reference sheet for an original virtual idol singer character.

LAYOUT: three full-body views of the SAME character side by side, evenly spaced, same scale and height, feet on one shared baseline:
(1) front view, (2) side profile facing the right edge of the image, (3) back view.
Light, lively standing pose, arms slightly away from the body so the silhouette reads clearly. Every view fully inside the frame, including the ribbon tails, with margins on all sides.

CHARACTER: Qianhang, a sword spirit who is also a virtual idol singer. An adult with a youthful, cute anime-idol look: petite, about 6 heads tall, soft round face, large bright cyan eyes with glossy highlights, a confident little smirk.
- Hair: glossy black hair with a blue sheen, in a long bouncy high ponytail tied with a big cinnabar-red (#E8381F) ribbon bow; the two ribbon tails hang down to the knees. The last third of the ponytail fades into glowing cyan (#19F0C8) fiber-optic strands. Soft side bangs, two small cyan hair clips shaped like angle brackets < >.
- Monocle + mic: a small translucent cyan HUD monocle over the LEFT eye; its thin white frame curves around the left ear and ends in a slim headset microphone near the mouth.
- Right arm: slender, glossy pearl-white cybernetic arm from the shoulder down, with glowing cyan seam lines; the right shoulder is bare of fabric.
- Outfit (modest idol-stage hanfu): white cross-collar top with cinnabar-red trim, the wearer's left panel over the right forming a "y" shape from the front; one wide flowing sleeve on the left arm only; black waist sash tied with a red cord knot; white pleated mamian-style skirt ending just above the knees, with pale cyan circuit-pattern embroidery along the hem; white knee-high socks; short white boots with cyan soles.

STYLE: bright, clean anime idol illustration, crisp cel shading with clean lineart, saturated colors, soft colored shadows (not gray). Plain flat off-white rice-paper background (#EDE4D3), no scenery. Even neutral lighting; only the hair tips, monocle and arm seams glow cyan.

No weapon. No text, labels, numbers, logos or watermark.
```

## ② 剑

`2048×1152` · `quality: high` · 参考图：无

```text
Prop design sheet for an original sword, the weapon of a cyber-wuxia virtual idol sword spirit.

LAYOUT: the full sword laid horizontally across the image, point to the right, large and centered; below it, two close-up insets: the crossguard, and a section of the blade.

DESIGN:
- Blade: straight double-edged Chinese jian made of translucent glass-like crystal; thin glowing cyan (#19F0C8) lines and abstract code-like light glyphs flow inside it (unreadable, no real letters).
- Crossguard: pearl-white metal shaped like the return-key arrow symbol ⏎, with glowing cyan edges.
- Grip: wrapped in cinnabar-red (#E8381F) cord in a diamond pattern.
- Pommel: a small round jade disc with a long cinnabar-red tassel hanging from it.

STYLE: bright, clean anime idol illustration, crisp cel shading with clean lineart, saturated colors, soft colored shadows (not gray). Plain flat off-white rice-paper background (#EDE4D3), even neutral lighting; only the lines inside the blade glow.

No text, labels or watermark.
```

## ③ 表情

`2048×2048` · `quality: high` · 参考图：① 三视图

```text
Expression sheet of the character in the reference image. Keep the face, hairstyle, cinnabar-red ribbon bow, glowing cyan hair tips, < > hair clips, LEFT-eye monocle with headset mic, outfit and colors exactly as in the reference.

LAYOUT: 2×2 grid of head-and-shoulders portraits, all in the same three-quarter view facing the left edge of the image (monocle side toward the viewer), same size and framing, evenly spaced:
- top-left: smug smirk, one eyebrow raised, half-lidded eyes looking down at the viewer
- top-right: flustered tsundere, face turned away, cheeks blushing, pouting, eyes glancing back sideways
- bottom-left: gentle soft smile, eyes half closed, calm and warm
- bottom-right: battle focus, sharp glare, mouth set, hair and ribbon blown by the wind

STYLE: same as the reference: bright, clean anime idol illustration, crisp cel shading, soft colored shadows, plain flat off-white rice-paper background (#EDE4D3), even neutral lighting.

No text, labels, speech bubbles or manga symbols.
```

## ④ 姿势

- 尺寸：全身 `1152×2048`，半身 `1536×2048`；`quality: high`；`background: "transparent"`；`output_format: "png"`
- 参考图：第一张传 ① 三视图，第二张传 ② 剑；5 号和 6 号再加 ③ 表情作为第三张
- 透明底不稳定时，把模板里的 `Isolated on a transparent background` 换成 `Isolated on a solid flat pure magenta (#FF00FF) background`

### 模板

把 `{POSE}` 换成下面某一条的内容，`{FRAMING}` 换成标题里的 `full body` 或 `waist-up`。

```text
Use the character from the first reference image and the sword from the second reference image exactly: same face, hair, cinnabar-red ribbon bow, glowing cyan hair tips, < > hair clips, LEFT-eye monocle with headset mic, pearl-white cybernetic RIGHT arm, outfit and colors. Do not mirror the character.

POSE: {POSE}
FRAMING: {FRAMING}. Keep the hands, ribbon tails and sword tip inside the frame, with margins on all sides.

Bright, clean anime idol illustration, crisp cel shading with clean lineart. Isolated on a transparent background: no scenery, no ground shadow, no glow halos, motion trails or light effects, no text.
```

### 1 背影伫立 · Intro · full body

```text
Back view, standing still, sword held loosely in the right hand pointing at the ground, head slightly lowered, hair and ribbon tails lifted by the wind.
```

### 2 低姿蓄势 · 主歌 · full body

```text
Low ready stance, knees bent, three-quarter view facing left, sword held low at the side with the blade angled back, eyes locked forward.
```

### 3 斜斩 · 副歌 / Drop · full body

```text
Mid-slash, a diagonal cut from the upper right to the lower left of the frame, cybernetic right arm fully extended, body twisting, hair and ribbon whipping in an arc, dramatic foreshortening, seen from a low angle.
```

### 4 冲刺 · Drop · full body

```text
Dashing forward close to the ground, side view facing right (cybernetic arm toward the viewer), sword trailing behind, skirt and ribbon streaming back.
```

### 5 扛剑冷笑 · 念白「哼」 · waist-up

```text
Sword resting on the right shoulder, head tilted, smug smirk with one eyebrow raised, looking down at the viewer.
```

### 6 抱臂傲娇 · 念白「才不是」 · waist-up

```text
Arms crossed, no sword, face turned away to the side, cheeks blushing, pouting, eyes glancing back at the viewer.
```

### 7 垂腿而坐 · Bridge · full body

```text
Sitting with legs dangling as if on a ledge (do not draw the ledge), hands resting beside the hips, no sword, looking down with a gentle smile.
```

### 8 举剑向天 · 终副歌 · full body

```text
Seen from a low angle, sword raised high overhead pointing at the sky in the cybernetic right hand, left hand open to the side, triumphant expression, hair and ribbon streaming upward.
```

### 9 唱歌 · 副歌 / 终副歌 · waist-up

```text
Singing with full energy, eyes closed, mouth open mid-note, left hand pressing the headset microphone, sword held point-down in the cybernetic right hand, hair and ribbon swaying.
```

### 10 抱拳收尾 · Outro · full body

```text
Wuxia fist-and-palm salute facing the viewer: the left palm covers the right cybernetic fist in front of the chest, a slight bow, a playful wink and a small smile, no sword.
```

### 11 剑特写 · 主歌 2「重铸」

不用模板，只传 ② 剑当参考图；尺寸 `1152×2048`，透明底。

```text
Use the sword from the reference image exactly. Close-up of the sword standing vertically, point up, filling the frame; the glass blade glows softly from within with cyan code-like light. Bright, clean anime illustration with crisp cel shading. Isolated on a transparent background. No hands, no text.
```
