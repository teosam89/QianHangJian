# 封面提示词

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

`3840×2160` · `quality: high` · 参考图：① 三视图 + ② 剑

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

`3840×2160` · `quality: high` · 参考图：无。开头先放 [STYLE_BIBLE.md](../STYLE_BIBLE.md) 第 5 节的风格锚点（不要最后那句留白），再接：

```text
Wide low-angle view of the rain-soaked cyber-wuxia city at night, calm and restored: pagoda rooftops, archways and upturned eaves merged with cyber megastructures, holographic lanterns, clean cyan neon lines. Open sky in the center of the image where a character will be placed; the lower-right area calmer and darker for the title.
```

### B2 背景·报错态

`3840×2160` · `quality: high` · 参考图：B1（用编辑接口）

```text
Edit the reference image. Keep exactly the same city, composition and camera angle, but make it corrupted: drowned in cinnabar-red (#E8381F) glitch blocks, broken data fragments, red warning light and scan-line distortion. Do not add any text.
```

### B3 角色·封面姿势

`2160×3840` · `quality: high` · 透明底 · 参考图：① 三视图 + ② 剑。用 [character.md](character.md) 的姿势模板，`{FRAMING}` 填 `full body`，`{POSE}` 填：

```text
Floating mid-air at the instant a huge diagonal slash finishes: cybernetic right arm fully extended toward the lower left, the oversized glass sword trailing behind the swing, body twisted, hair and the long red ribbon whipping in an arc; head turned back toward the viewer with a confident smirk, the monocle glinting. Strong cyan rim lighting on her silhouette from the lower left (lighting on the character only, no glow around her). Camera in front of her at chest height, dramatic foreshortening on the sword arm and sword.
```

### B4 Remotion 合成

用 `<Still id="Cover" width={3840} height={2160} />`，图层从下到上：

1. B1 修复态铺满
2. B2 报错态用 `clip-path: polygon(0 0, 100% 0, 0 100%)` 只留左上三角，沿斩线方向错开十几像素
3. 斩线：SVG `<line>` 从右上角连到左下角，青锋色，加 `drop-shadow` 辉光
4. 红色碎片：沿斩线用 `random()` 撒小红块往外飞
5. B3 角色放中间
6. 标题放右下角
7. 全局宣纸纹理和颗粒

导出：`npx remotion still Cover out/cover.png`。方形版（2160×2160）和竖版（1620×2160）各建一个 `<Still>`，复用同样的图层、只改排版。

终副歌"红转青"直接复用这套：先铺满报错态，斩线划过的瞬间，沿线揭开修复态。

## 标题和文字（在 Remotion 里加）

字跟着"一剑劈开"走：水墨那半边用书法题字，红色那半边用等宽代码字。字体分工见 [STYLE_BIBLE.md](../STYLE_BIBLE.md) 第 7 节。

- **主标题「千行剑」**：马善政楷书，竖排，放在右下角的水墨区，三个字约占画面高度的四成。用墨黑色，外面加一圈淡淡的宣纸色外发光，像国画上的题字。
- **印章**：朱砂红方块里放反白的「赛博江湖」（白文印），按右列"赛博"、左列"江湖"排，边缘做破损，盖在标题下方。不用另找篆书字体，马善政反白就行。
- **钩子句「一剑劈开数据界」**：霞鹜文楷，竖排小字，贴在标题左边。
- **彩蛋 `ERROR ×999+ → 0`**：JetBrains Mono，朱砂红，放在左上红色区靠近斩线的位置，加一点 RGB 错位。
- 除了标题和印章，最多再加这两行小字；字一多，缩略图里就看不清了。
- **进阶**：把「剑」字最后那一笔（立刀旁的竖钩）拉长成一把剑，带青光。在 Figma 或 Illustrator 里把字转成轮廓，换掉那一笔，导出 SVG 给 Remotion 用。

## 发布前检查

把封面缩到 320 像素宽，看三件事：脸看得清、标题认得出、红青两半一眼分得开。
