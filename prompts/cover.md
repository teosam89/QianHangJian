# 封面提示词

## 一剑劈开：直接修原图（主封面推荐）

原图的光影、纵深和动作张力，分层合成很难做出来。所以主封面直接修这张一次成图的原图，只改两处：裙底补上安全裤，方图扩成 16:9。下面"定稿：三张候选"里的分层合成，留给 MV 里要动起来的镜头。

1. **准备文件**：运行 `python tools/cover_fix_prep.py <原图路径>`（需要 Pillow），文件会生成在 `out/edit/`。先看 `skirt-preview.png`：红色区域要盖住裙底，又不能碰到手和剑柄。位置不对，就改脚本开头的 `SKIRT`。
2. **修裙底**：用 `images.edit`，`image` 传原图，`mask` 传 `out/edit/skirt-mask.png`，`size` 用 `auto`。

   ```text
   In the masked area only: she wears white fitted shorts under the pleated skirt, and the skirt hangs slightly lower, so nothing under the skirt is visible. Keep the pose, legs, lighting, colors and rendering style exactly the same. Do not change anything outside the masked area. No text.
   ```

3. **扩成 16:9**：用第 2 步修好的图重新运行一次脚本，然后用 `images.edit`：`image` 传 `out/edit/outpaint-canvas.png`，`mask` 传 `out/edit/outpaint-mask.png`，`size` 用 `2560x1440`。

   ```text
   Extend this illustration to a wide 16:9 composition. Fill only the empty areas on the left and right: continue the red corrupted city on the left and the calm ink-wash city with waterfalls on the right, and continue the diagonal cyan cut line and the red glitch shards along it, with the same rain, lighting and painting style. Do not change anything in the existing center area. No text, no letters, no logos, no watermark.
   ```

4. **加字**：把成品存成 `public/drafts/split-full.png`，然后运行 `npx remotion still CoverTypeset out/cover-final.png --props=tools/props-split-full.json`。注意：`CoverTypeset` 里的钩子句还是早期的小字号，之前定的"钩子句约为标题六成"还没改进去。

在 ChatGPT 网页版里做的话：第 2 步用涂抹选区工具圈住裙底，再贴第 2 步的 prompt；第 3 步直接上传修好的图，让它扩成 16:9。网页版会重画整张图，细节可能会变。

## 定稿：三张候选（分层出图）

用 grilling 定下来的方案。三张都是 B站横版 16:9，都是 MV 里的一帧；背景和角色分开出，在 Remotion 里合成。

| 封面 | Remotion | MV 时刻 | 钩子句 | 字的位置 |
|---|---|---|---|---|
| 一剑劈开 | `CoverSplit` | 终副歌红转青 | 一剑劈开数据界 | 右下水墨区，竖排墨黑字，加印章 |
| 剑指镜头 | `CoverThrust` | 念白「哼，就这点报错？」 | 哼，就这点报错？（念白气泡） | 标题竖排放左侧三分之一，白字加青光；气泡在右上 |
| 千剑齐发 | `CoverSwords` | 终副歌 | 万般漏洞皆可解 | 底部正中横排白字加青光，印章在右边 |

三张都在左上角放彩蛋 `ERROR ×999+ → 0`。钩子句字号约为标题的六成，缩到 320 像素宽也能读。

### 出图清单（8 张，放进 `public/cover/`）

| # | 文件 | 封面 | 内容 | 参考图（按顺序） | 尺寸 | 背景 |
|---|---|---|---|---|---|---|
| 1 | `split-bg-clean.png` | 一剑劈开 | 修好的水墨城 | 3 | 2560×1440 | 不透明 |
| 2 | `split-bg-corrupt.png` | 一剑劈开 | 同一座城被报错淹没 | 第 1 张出好的图 | 2560×1440 | 不透明 |
| 3 | `split-char.png` | 一剑劈开 | 半身回头坏笑 | 1、2、3 | 1920×1920 | 透明 |
| 4 | `thrust-char.png` | 剑指镜头 | 胸像前刺，剑尖在正中 | 1、2、3，可加 4 | 1920×1920 | 透明 |
| 5 | `thrust-crack.png` | 剑指镜头 | 黑底白色玻璃裂纹（可选） | 无 | 2560×1440 | 不透明 |
| 6 | `swords-bg.png` | 千剑齐发 | 雨夜水墨城上空，红色报错如雨 | 3 | 2560×1440 | 不透明 |
| 7 | `swords-char.png` | 千剑齐发 | 半身正面挥手 | 1、2、3 | 1920×1920 | 透明 |
| 8 | `sword-single.png` | 千剑齐发 | 单把剑，竖直、剑尖朝上（可选） | 2 | 1152×2048 | 透明 |

参考图编号见 [feeding.md](feeding.md)：1 三视图、2 剑、3 封面风格图、4 表情。`quality` 都用 `high`；透明底要加 `background: "transparent"` 和 `output_format: "png"`。

缺哪张图，Remotion 就在那个位置画占位并标出文件名，所以可以出一张、放一张、渲染看一张。

### 渲染

```bash
npx remotion still CoverSplit out/CoverSplit.png
npx remotion still CoverThrust out/CoverThrust.png
npx remotion still CoverSwords out/CoverSwords.png
```

角色层是 1920×1920 的正方形。它在画面里的位置和大小写在各自文件开头的 `PLACE` 里（`src/cover/`），占位时会画出脸的位置。真图放进来后，如果脸和占位圈没对上，就改 `PLACE` 的 `x`、`y`、`size`。

### 1 `split-bg-clean.png`

`2560×1440` · 参考图：3 · 不透明底

```text
Match the rendering style and color grading of the reference image, but draw no characters and do not copy its composition.

Chinese cyber-wuxia background illustration, no characters. Environments painted as Chinese ink wash on rice paper with an anime background-art finish: dry-brush texture, mist and rain; traditional pagodas, archways and upturned eaves merged with cyber megastructures and holographic lanterns. Neon appears only as light sources and thin glowing lines; signboards are blank glowing panels. Strict palette: ink black #0B0B10, rice-paper white #EDE4D3, cinnabar red #E8381F, sword cyan #19F0C8. High contrast, cinematic composition. No text, no letters, no logos, no watermark.

Wide view of the rain-soaked cyber-wuxia city at night, calm and restored: pagoda rooftops, archways and upturned eaves merged with cyber megastructures, waterfalls and misty cliffs, clean cyan neon lines. Camera at chest height looking slightly up. Keep the center open for a waist-up character, and keep the lower right calm and light for a vertical calligraphy title.
```

### 2 `split-bg-corrupt.png`

`2560×1440` · 参考图：第 1 张出好的图 · 不透明底。用编辑接口，把它当第一张参考图。

```text
Edit the reference image. Keep exactly the same city, composition and camera angle, but make it corrupted: drowned in cinnabar-red (#E8381F) glitch blocks, broken data fragments, red warning light and scan-line distortion. Do not add any text.
```

### 3 `split-char.png`

`1920×1920` · 参考图：1、2、3 · 透明底

```text
Use the character from the first reference image and the sword from the second reference image exactly: same face, hair, cinnabar-red ribbon bow, glowing cyan hair tips, < > hair clips, LEFT-eye monocle with headset mic, pearl-white cybernetic RIGHT arm, outfit (white fitted shorts under the skirt) and colors. Do not mirror the character. Match the rendering style, color grading and lighting of the third reference image, but do not copy its pose or camera angle.

POSE: Waist-up, seen from behind at a three-quarter angle. She has just finished a huge diagonal slash; the oversized glass sword rests on her right shoulder, and she looks back over her left shoulder at the viewer (the monocle side of her face toward the viewer) with a cocky smirk and one eyebrow raised, the monocle glinting. Hair and the long red ribbon still whip from the swing. Strong cyan rim light on her silhouette from the lower left and a faint red glow from the upper left (lighting on the character only, no glow around her).
FRAMING: waist-up, her head near the top center, the figure filling most of the square. Keep the hands, ribbon tails and sword inside the frame with small margins. Camera at her chest height. Modest framing: the camera never looks up the skirt.

Bright, clean anime idol illustration, crisp cel shading. Isolated on a transparent background: no scenery, no ground shadow, no glow halos, motion trails or light effects, no text.
```

### 4 `thrust-char.png`

`1920×1920` · 参考图：1、2、3，可加 4 · 透明底

```text
Use the character from the first reference image and the sword from the second reference image exactly: same face, hair, cinnabar-red ribbon bow, glowing cyan hair tips, < > hair clips, LEFT-eye monocle with headset mic, pearl-white cybernetic RIGHT arm, outfit (white fitted shorts under the skirt) and colors. Do not mirror the character. Match the rendering style, color grading and lighting of the third reference image, but do not copy its pose or camera angle.

POSE: Chest-up, facing the viewer, she lunges straight at the camera with the glass sword thrust forward in her cybernetic right hand. The sword tip is huge and very close to the lens at the exact center of the image, the blade receding toward her in extreme foreshortening just beside her face, so her face stays clear. One eye narrowed, a cocky smirk, the monocle glinting. Hair and ribbon thrown forward by the lunge. Cyan light from the blade on her face and a faint red rim light from behind (lighting on the character only, no glow around her).
FRAMING: chest-up, her face slightly right of center in the upper third of the square, the sword tip at the exact center.

Bright, clean anime idol illustration, crisp cel shading. Isolated on a transparent background: no scenery, no ground shadow, no glow halos, motion trails or light effects, no text.
```

### 5 `thrust-crack.png`

`2560×1440` · 参考图：无 · 不透明底。GPT 画的裂纹会盖到脸上。觉得挡脸，就不放这张，代码画的裂纹会自动避开脸。

```text
A spiderweb crack in a sheet of glass, seen straight on: thin bright white fracture lines radiating from a small impact point at the exact center of the image, with a few concentric broken rings and tiny glass chips near the impact. Pure black background, nothing else in the image, high contrast, sharp lines. No text.
```

### 6 `swords-bg.png`

`2560×1440` · 参考图：3 · 不透明底

```text
Match the rendering style and color grading of the reference image, but draw no characters and do not copy its composition.

Chinese cyber-wuxia background illustration, no characters. Environments painted as Chinese ink wash on rice paper with an anime background-art finish: dry-brush texture, mist and rain; traditional pagodas, archways and upturned eaves merged with cyber megastructures and holographic lanterns. Neon appears only as light sources and thin glowing lines; signboards are blank glowing panels. Strict palette: ink black #0B0B10, rice-paper white #EDE4D3, cinnabar red #E8381F, sword cyan #19F0C8. High contrast, cinematic composition. No text, no letters, no logos, no watermark.

Night sky high above the rain-soaked ink-wash cyber-wuxia city: pagoda rooftops and thin cyan neon lines far below along the bottom edge, cinnabar-red error fragments falling through the dark sky like rain. The center of the sky is dark and empty (a character and a sword formation will be placed there). Camera at chest height looking straight ahead. Keep the bottom quarter dark and calm for a title.
```

### 7 `swords-char.png`

`1920×1920` · 参考图：1、2、3 · 透明底

```text
Use the character from the first reference image and the sword from the second reference image exactly: same face, hair, cinnabar-red ribbon bow, glowing cyan hair tips, < > hair clips, LEFT-eye monocle with headset mic, pearl-white cybernetic RIGHT arm, outfit (white fitted shorts under the skirt) and colors. Do not mirror the character. Match the rendering style, color grading and lighting of the third reference image, but do not copy its pose or camera angle.

POSE: Waist-up, facing the viewer straight on, perfectly centered and symmetrical. She sweeps her left arm out and up, palm open, as if commanding a thousand swords to fly forward; the glass sword is held upright in her cybernetic right hand beside her face. A confident smirk, eyes locked on the viewer. Hair and the long red ribbon lifted by a strong wind blowing from behind her toward the viewer. Strong cyan backlight from behind her and soft cyan fill on her face (lighting on the character only, no glow around her).
FRAMING: waist-up, her head at the top center, the figure filling most of the square. Keep the hands, ribbon tails and sword inside the frame. Camera at her chest height. Modest framing: the camera never looks up the skirt.

Bright, clean anime idol illustration, crisp cel shading. Isolated on a transparent background: no scenery, no ground shadow, no glow halos, motion trails or light effects, no text.
```

### 8 `sword-single.png`

`1152×2048` · 参考图：2 · 透明底。不放这张时，剑阵用代码画的剑。

```text
Use the sword from the reference image exactly. A single sword standing perfectly vertical, point up, centered and filling the height of the frame, seen straight on with no perspective: translucent glass blade glowing softly from within with cyan code-like light, dark gunmetal crossguard shaped like the return-key arrow ⏎, grip wrapped in cinnabar-red cord, a red tassel hanging straight down. Bright, clean anime illustration with crisp cel shading. Isolated on a transparent background: no hands, no shadow, no glow halos, no text.
```

---

以下是 grilling 之前的早期方案和备选，留作参考。

## 概念「一剑劈开」

一道青色斩线从右上角到左下角，把整张图斜着劈成两半：左上是被红色报错淹没的城，右下是修好的青色水墨城。千行就在斩线正中，刚挥完剑，回头冲观众坏笑。

封面用的就是终副歌"全城由红转青"那一刻，缩略图上看到的高潮，MV 里会兑现。

## 构图规则

- **一个焦点**：角色的脸，加上那道斩线。整张图最亮的只有斩线，七成画面是暗部。
- **红青对撞**：朱砂和青锋接近互补色，缩成小图也一眼分得开。
- **对角线构图加强透视**出动势。透视感放在剑和手臂上；机位放在角色正前方、胸口高度，不要从裙下往上拍。
- **角色要大**：信息流里封面很小，看得清脸才会有人点。
- **脸放在画面中间那块正方形里**：平台会在不同位置裁成方形或竖版，脸放中间才不会被切掉。
- **标题放右下角**：那里是修好的平静区域，画面压暗、少放细节。

## 路线 A：一次成图（先看效果）

`2560×1440` · `quality: high` · 参考图：① 三视图 + ② 剑

已经有一张满意的封面、想修机位或改成横版时：参考图按顺序喂 1 三视图、2 剑、3 这张封面，并把下面 prompt 的开头一段换成 [feeding.md](feeding.md) 里的三图版开头。

```text
Use the character from the first reference image and the sword from the second reference image exactly: same face, hair, cinnabar-red ribbon bow, glowing cyan hair tips, < > hair clips, LEFT-eye monocle with headset mic, pearl-white cybernetic RIGHT arm, outfit (white fitted shorts under the skirt) and colors. Do not mirror the character.

Epic music video key visual. One razor-thin, blinding cyan (#19F0C8) cut line runs diagonally across the entire image from the upper right corner to the lower left corner, splitting the world in two:
- upper-left side: a rain-soaked cyber-wuxia city drowned in cinnabar-red (#E8381F) glitch blocks, corrupted data and red warning light;
- lower-right side: the same city restored, calm Chinese ink wash on rice paper with clean cyan neon lines.
Along the cut, the two halves are slightly offset as if the world itself was sliced, with shards of red glitch flying off the edge.

The character floats right on the cut line in the center, at the instant the slash finishes: cybernetic right arm fully extended toward the lower left, the oversized glass sword trailing the cut, hair and the long red ribbon whipping in an arc. Head turned back toward the viewer with a confident smirk; the monocle glints. Strong cyan rim light from the cut on her silhouette.

Composition: camera in front of her at chest height, three-quarter front view, dramatic foreshortening on the sword arm and sword; modest framing, the camera never looks up the skirt. The character is large in frame with her head and face inside the central square of the image; the lower-right area calmer and darker, reserved for the title. About 70% of the image is dark; the cut line is the brightest element. Rain droplets frozen in mid-air.

Style: bright clean anime idol character with crisp cel shading, against Chinese ink-wash cyber-wuxia environments; strict palette ink black #0B0B10, rice-paper white #EDE4D3, cinnabar red #E8381F, sword cyan #19F0C8. No text, no letters, no logos, no watermark.
```

## 路线 B：分层合成（定稿推荐）

斩线位置、两半的错开程度和标题排版都能精确控制，做好后也能直接用在终副歌里。

### B1 背景·修复态

`2560×1440` · `quality: high` · 参考图：无。开头先放 [STYLE_BIBLE.md](../STYLE_BIBLE.md) 第 5 节的风格锚点（不要最后那句留白），再接：

```text
Wide low-angle view of the rain-soaked cyber-wuxia city at night, calm and restored: pagoda rooftops, archways and upturned eaves merged with cyber megastructures, holographic lanterns, clean cyan neon lines. Open sky in the center of the image where a character will be placed; the lower-right area calmer and darker for the title.
```

### B2 背景·报错态

`2560×1440` · `quality: high` · 参考图：B1（用编辑接口）

```text
Edit the reference image. Keep exactly the same city, composition and camera angle, but make it corrupted: drowned in cinnabar-red (#E8381F) glitch blocks, broken data fragments, red warning light and scan-line distortion. Do not add any text.
```

### B3 角色·封面姿势

`1440×2560` · `quality: high` · 透明底 · 参考图：① 三视图 + ② 剑。用 [character.md](character.md) 的姿势模板，`{FRAMING}` 填 `full body`，`{POSE}` 填：

```text
Floating mid-air at the instant a huge diagonal slash finishes: cybernetic right arm fully extended toward the lower left, the oversized glass sword trailing behind the swing, body twisted, hair and the long red ribbon whipping in an arc; head turned back toward the viewer with a confident smirk, the monocle glinting. Strong cyan rim lighting on her silhouette from the lower left (lighting on the character only, no glow around her). Camera in front of her at chest height, dramatic foreshortening on the sword arm and sword.
```

### B4 Remotion 合成

用 `<Still id="Cover" width={2560} height={1440} />`，图层从下到上：

1. B1 修复态铺满
2. B2 报错态用 `clip-path: polygon(0 0, 100% 0, 0 100%)` 只留左上三角，沿斩线方向错开十几像素
3. 斩线：SVG `<line>` 从右上角连到左下角，青锋色，加 `drop-shadow` 辉光
4. 红色碎片：沿斩线用 `random()` 撒小红块往外飞
5. B3 角色放中间
6. 标题放右下角
7. 全局宣纸纹理和颗粒

导出：`npx remotion still Cover out/cover.png`。方形版（1440×1440）和竖版（1080×1440）各建一个 `<Still>`，复用同样的图层、只改排版。

终副歌"红转青"直接复用这套：先铺满报错态，斩线划过的瞬间，沿线揭开修复态。

## 标题和文字（在 Remotion 里加）

字跟着"一剑劈开"走：水墨那半边用书法题字，红色那半边用等宽代码字。字体分工见 [STYLE_BIBLE.md](../STYLE_BIBLE.md) 第 7 节。

- **主标题「千行剑」**：马善政楷书，竖排，放在右下角的水墨区，三个字约占画面高度的四成。用墨黑色，外面加一圈淡淡的宣纸色外发光，像国画上的题字。
- **印章**：朱砂红方块里放反白的「赛博江湖」（白文印），按右列"赛博"、左列"江湖"排，边缘做破损，盖在标题下方。不用另找篆书字体，马善政反白就行。
- **钩子句「一剑劈开数据界」**：霞鹜文楷，竖排小字，贴在标题左边。
- **彩蛋 `ERROR ×999+ → 0`**：JetBrains Mono，朱砂红，放在左上红色区靠近斩线的位置，加一点 RGB 错位。
- 除了标题和印章，最多再加这两行小字；字一多，缩略图里就看不清了。
- **进阶**：把「剑」字最后那一笔（立刀旁的竖钩）拉长成一把剑，带青光。在 Figma 或 Illustrator 里把字转成轮廓，换掉那一笔，导出 SVG 给 Remotion 用。

## 其他封面方案

| 方案 | 卖点 | 最适合 | 对应 MV 段落 |
|---|---|---|---|
| 一剑劈开（上面） | 红青对撞，一眼看懂故事 | B站横版主封面 | 终副歌红转青 |
| A 千剑阵 | 对称、有图腾感，就是"千行剑"的字面意思 | B站主封面、宣传主视觉 | 副歌、终副歌 |
| B 破屏 | 冲击力最强，脸占画面大 | 抖音等竖版平台 | 念白「哼」 |
| C 红龙压城 | 体量对比，史诗感 | 横版、预告 | 主歌「黑客如潮」 |
| D 屏幕内外 | 有故事和情绪，程序员会心一笑 | B站（引人好奇点进来） | Bridge「你若深夜仍未眠」 |
| E 水墨留白 | 在信息流里最不撞款，显得高级 | 音乐平台专辑封面（1:1） | Bridge、Outro |

每条 prompt 都由三段拼成：**共用开头 + 方案正文 + 共用结尾**，`quality: high`。参考图按 [feeding.md](feeding.md) 的顺序喂：1 三视图、2 剑、3 已经满意的封面（风格图）。还没有风格图时，只传前两张，并删掉共用开头的最后一句。

共用开头：

```text
Use the character from the first reference image and the sword from the second reference image exactly: same face, hair, cinnabar-red ribbon bow, glowing cyan hair tips, < > hair clips, LEFT-eye monocle with headset mic, pearl-white cybernetic RIGHT arm, outfit (white fitted shorts under the skirt) and colors. Do not mirror the character. Match the rendering style, color grading and lighting of the third reference image, but do not copy its pose or camera angle.
```

共用结尾：

```text
Strict palette: ink black #0B0B10, rice-paper white #EDE4D3, cinnabar red #E8381F, sword cyan #19F0C8. Modest framing: the camera never looks up the skirt. Keep the focal point inside the central square of the image. No text, no letters, no logos, no watermark.
```

### A 千剑阵

`2560×1440`。标题横排放在底部正中，白字加青光。

```text
Iconic symmetrical key visual. She floats in the exact center facing the viewer with a calm, confident little smirk, the oversized glass sword held upright in her cybernetic right hand beside her face. Behind her, a thousand floating glass swords form a vast circular halo in concentric rings, every blade pointing outward and glowing cyan from a line of code-like light inside. The outermost ring is still corrupted, its swords cracked and glitching red, turning cyan toward the center. Far below lies the rain-soaked ink-wash cyber-wuxia city; red error fragments fall through the night sky like rain. Camera straight-on at her chest height, perfect symmetry, her face at the exact center of the halo. Keep the bottom fifth of the image calm and dark for the title. Bright clean anime idol character with crisp cel shading, painterly ink-wash environment.
```

Remotion：剑阵可以单独出一张透明底，在 MV 里让它慢慢转，角色叠在上面。

### B 破屏

`1440×2560` 竖版。标题横排放在顶部暗处，钩子句放在底部。

```text
Extreme foreshortening: she lunges straight at the viewer and the tip of the glass sword pierces the camera lens. The sword point is huge in the foreground at the center of the frame, the blade receding toward her just beside her face, so her face stays clear. The screen glass cracks outward from the tip in a spiderweb of cyan light. Her face is in sharp focus: one eye narrowed, a cocky smirk, the monocle glinting. Shards of red glitch blow past her toward the viewer. The background melts into dark rain and red neon bokeh. Camera at her eye level. Keep the top fifth of the image darker for the title. Bright clean anime idol character with crisp cel shading, shallow depth of field.
```

Remotion：想精确控制裂纹的位置和大小，就把 prompt 里讲裂纹的那句删掉，另出一张黑底白裂纹，用 `mix-blend-mode: screen` 叠上去。

### C 红龙压城

`2560×1440`。标题竖排放在左下角，白字加青光。

```text
Epic scale contrast. A colossal dragon made of corrupted red data (glitch blocks, broken code fragments, red warning light) coils over the whole neon cyber-wuxia city at night, its enormous head lowered toward the center with glowing red eyes, filling the upper two thirds of the sky. On the tip of the tallest pagoda roof in the middle, she stands small but sharply lit, seen from behind at a three-quarter angle with her face turned slightly back in profile, sword raised toward the dragon. Her cyan blade is the single brightest point in the image, its light cutting a thin line into the red. Hair and the long red ribbon whip in the storm wind; heavy rain, red lightning in the clouds. Camera slightly above her shoulder height, looking past her toward the dragon. Keep the lower-left corner calmer and darker for the title. Bright clean anime idol character with crisp cel shading, ink-wash city, dramatic cinematic lighting.
```

这个方案用体量换掉了大脸，缩略图里靠的是红色大块里那一点青光，所以那道剑光一定要是全图最亮的地方。

### D 屏幕内外

`2560×1440`。标题竖排放在右侧三分之一，白字加青光。

```text
A dark bedroom at 3 a.m., rain streaking the window. In the foreground, the shoulders and back of a programmer slumped at a desk, a dark silhouette seen from behind, face not visible. The monitor in front of them glows cyan and is covered in red error pop-up windows (blank, no readable text). She leans out of the monitor as if it were a window, her upper body emerging into the room, one hand gripping the edge of the screen, the glass sword resting on her shoulder, looking down at the programmer with a teasing smirk and faintly pink cheeks. Cyan code-light and a few raindrops spill out of the screen into the room. The room is in deep ink-black shadow; the only light comes from the cyan monitor and the red error windows. Camera at desk height just behind the programmer's shoulder. Keep the right third darker for the title. Bright clean anime idol character with crisp cel shading; the room in a moody painterly style.
```

Remotion：报错弹窗留空，在 Remotion 里贴上真实的报错文字（JetBrains Mono），MV 里还能做成一个个弹出来的动画。

### E 水墨留白

`1920×1920`。标题是画面主角：马善政楷书大字竖排放在右半边，墨黑色，下面盖朱砂印章。

```text
Minimal Chinese ink-painting poster on aged rice paper (#EDE4D3), about 60% empty negative space. A single enormous dry-brush ink stroke sweeps diagonally across the paper like a sword slash, flinging ink droplets. She leaps through the stroke mid-slash, side view facing right, her figure painted in monochrome ink wash with brush-pen lineart while her face and design stay recognizable. The only colors in the whole image are her cinnabar-red ribbon and sword tassel and the glowing cyan glass sword. Faint ink-wash pagoda silhouettes and mist in the far lower distance. Calm, elegant, high-end poster feel. Camera at her chest height. Keep the right half almost empty for a large calligraphy title.
```

Remotion：那一笔墨迹可以单独出一张白底黑墨，当遮罩用，在 MV 里做"一笔扫过、画面显影"的转场。

## 发布前检查

把封面缩到 320 像素宽，看三件事：脸或主体剪影看得清、标题认得出、红和青一眼分得开。
