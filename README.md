# 千行剑 MV

视觉规范见 [STYLE_BIBLE.md](STYLE_BIBLE.md)，出图提示词在 [prompts/](prompts/)，参考图怎么喂见 [prompts/feeding.md](prompts/feeding.md)。参考图放在 `refs/`。

## 渲染

```bash
npm install

# 字体样张：7 种字体按 MV 里的实际用法排成一张图
npx remotion still FontSpecimen out/font-specimen.png

# 三张候选封面：分层素材放进 public/cover/，缺的图会自动画成占位
npx remotion still CoverSplit out/CoverSplit.png
npx remotion still CoverThrust out/CoverThrust.png
npx remotion still CoverSwords out/CoverSwords.png

# 早期草图的排字预览：草图放到 public/drafts/cover-draft.webp（这个目录不进仓库）
npx remotion still CoverTypeset out/cover-typeset.png
```

三张候选封面的出图清单和 prompt 见 [prompts/cover.md](prompts/cover.md)。草图预览的画布尺寸会自动跟随图片。

如果所在环境不能自动下载 Remotion 用的浏览器，用环境变量指定本地的 Chrome Headless Shell：

```bash
REMOTION_BROWSER_EXECUTABLE=/path/to/headless_shell npx remotion still FontSpecimen out/font-specimen.png
```
