// 字体分工见 STYLE_BIBLE.md 第 7 节；全部是 OFL 授权
import "@fontsource/ma-shan-zheng/400.css";
import "@fontsource/zhi-mang-xing/400.css";
import "@fontsource/zcool-kuaile/400.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/700.css";
import "@fontsource/lxgw-wenkai/500.css";
import "@fontsource/lxgw-wenkai/700.css";
import "@fontsource/fusion-pixel-12px-monospaced-sc/400.css";
import "@chinese-fonts/dyh/dist/SmileySans-Oblique/result.css";
import { useEffect, useState } from "react";
import { cancelRender, continueRender, delayRender } from "remotion";

export const FONT = {
  title: "'Ma Shan Zheng'", // 封面、片头标题
  chorus: "'Zhi Mang Xing'", // 副歌爆字
  verse: "'Smiley Sans Oblique'", // 主歌快嘴歌词（得意黑）
  bridge: "'LXGW WenKai'", // Bridge 歌词（霞鹜文楷）
  spoken: "'ZCOOL KuaiLe'", // 念白
  code: "'JetBrains Mono'", // 代码、报错、终端
  pixel: "'Fusion Pixel 12px Monospaced SC'", // 系统重启、复古段
} as const;

type FontSample = { family: string; text: string; weight?: number };

// 中文字体按 unicode-range 拆成很多小文件，用到哪些字才下载哪些。
// 截图前先把每种字体要用的字加载完，避免渲染出兜底字体。
export const useFontsReady = (samples: FontSample[]) => {
  const [handle] = useState(() => delayRender("Loading fonts"));
  useEffect(() => {
    Promise.all(
      samples.map(({ family, text, weight = 400 }) =>
        document.fonts.load(`${weight} 48px ${family}`, text),
      ),
    )
      .then(() => document.fonts.ready)
      .then(() => continueRender(handle))
      .catch((err) => cancelRender(err));
    // 只在挂载时加载一次
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
