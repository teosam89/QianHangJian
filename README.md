# 千行剑 MV

视觉规范见 [STYLE_BIBLE.md](STYLE_BIBLE.md)，出图提示词在 [prompts/](prompts/)。

## 渲染

```bash
npm install

# 字体样张：7 种字体按 MV 里的实际用法排成一张图
npx remotion still FontSpecimen out/font-specimen.png

# 封面排字：先把封面图放到 public/drafts/cover-draft.webp（这个目录不进仓库）
npx remotion still CoverTypeset out/cover-typeset.png
```

封面画布的尺寸会自动跟随图片，方形和 16:9 都能直接套。

如果所在环境不能自动下载 Remotion 用的浏览器，用环境变量指定本地的 Chrome Headless Shell：

```bash
REMOTION_BROWSER_EXECUTABLE=/path/to/headless_shell npx remotion still FontSpecimen out/font-specimen.png
```
