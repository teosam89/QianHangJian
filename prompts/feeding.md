# 参考图怎么喂

## 参考图约定

参考图放在 `refs/`，文件名和喂的顺序都固定。prompt 里写的 first / second / third reference image，就按这个顺序对应。

| 顺序 | 文件 | 内容 | 怎么来的 |
|---|---|---|---|
| 1 | `refs/01-turnaround.png` | 三视图 | 从封面反推（[character.md](character.md) ⓪-1） |
| 2 | `refs/02-sword.png` | 剑设定图 | 从封面反推（⓪-2） |
| 3 | `refs/03-style-cover.png` | 风格图 | 就是已经满意的那张封面 |
| 4 | `refs/04-expressions.png` | 表情 | 可选，只在念白特写时加 |

## 从一张封面开始

| 步骤 | 喂的图（按顺序） | 喂的文字 |
|---|---|---|
| 反推三视图 | 封面 | character.md ⓪-1 |
| 反推剑 | 封面 | character.md ⓪-2 |
| 检查 | — | STYLE_BIBLE 第 3 节的标志特征和左右检查 |
| 角色姿势（透明底） | 1、2；念白特写再加 4 | character.md ④ 模板 |
| 修封面、其他封面、带角色的 MV 镜头 | 1、2、3 | 三图版开头 + 正文 + 共用结尾 |
| 纯背景 | 3 | 背景开头 + STYLE_BIBLE 第 5 节锚点 + 镜头描述 |
| 局部修图 | 要修的图放第一张，另附 mask | 只写要改的地方 |

### 三图版开头

带角色的镜头都用这段开头：

```text
Use the character from the first reference image and the sword from the second reference image exactly: same face, hair, cinnabar-red ribbon bow, glowing cyan hair tips, < > hair clips, LEFT-eye monocle with headset mic, pearl-white cybernetic RIGHT arm, outfit (white fitted shorts under the skirt) and colors. Do not mirror the character. Match the rendering style, color grading and lighting of the third reference image, but do not copy its pose or camera angle.
```

### 背景开头

纯背景只喂风格图，开头用这段：

```text
Match the rendering style and color grading of the reference image, but draw no characters and do not copy its composition.
```

## 喂的规则

- **图和文字都要喂**：参考图管长相，文字管细节，两边说的一致时最稳。不要因为传了图，就把角色描述删掉。
- **参考图最多四张**：传得越多，每张的分量越轻。
- **封面当风格图时，一定写"不要照抄它的姿势和机位"**，否则仰拍构图也会被学过去。
- **mask 只作用在第一张图上**：局部修图时，把要修的那张放第一张。mask 是和它同尺寸的 PNG，透明的地方就是要重画的地方。

## API 调用（OpenAI Node SDK）

带参考图用 `images.edit`，纯文字生成用 `images.generate`。

```js
import fs from "node:fs";
import path from "node:path";
import OpenAI, { toFile } from "openai";

const client = new OpenAI();
const MIME = { ".png": "image/png", ".webp": "image/webp", ".jpg": "image/jpeg" };

// 顺序固定：1 三视图、2 剑、3 风格图
const refs = ["refs/01-turnaround.png", "refs/02-sword.png", "refs/03-style-cover.png"];
const image = await Promise.all(
  refs.map((p) => toFile(fs.createReadStream(p), null, { type: MIME[path.extname(p)] })),
);

const res = await client.images.edit({
  model: "gpt-image-2",
  image,
  prompt: fs.readFileSync("prompt.txt", "utf8"),
  size: "2560x1440",
  quality: "high",
});

fs.writeFileSync("out.png", Buffer.from(res.data[0].b64_json, "base64"));
```

- `image` 最多 16 张，每张是 png、webp 或 jpg，小于 50MB。
- `size` 的宽高都要能被 16 整除，比例在 1:3 到 3:1 之间。超过 2560×1440 的尺寸属于实验性，最大 3840×2160。
- 透明底：加 `background: "transparent"` 和 `output_format: "png"`。gpt-image-2 上这是预览功能。
- `input_fidelity: "high"` 能让结果更贴近参考图，但 gpt-image-2 会忽略这个参数。
- 结果固定以 base64 返回，在 `res.data[0].b64_json` 里。

以上参数说明来自 OpenAI 官方 Node SDK（openai 7.28.0）的类型定义。这段示例没有在本仓库里实际调用过 API。

## 在 ChatGPT 网页版里

在同一条消息里按顺序上传图片（1 三视图、2 剑、3 封面），再贴 prompt。网页版不能精确指定尺寸，在 prompt 末尾写明"16:9 横版"或"竖版"即可。
