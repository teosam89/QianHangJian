import React from "react";
import { AbsoluteFill } from "remotion";
import { C } from "./theme";
import { FONT, useFontsReady } from "./fonts";
import { Seal } from "./Seal";

// 字体样张：每种字体配它在 MV 里的真实用法和歌词
const H = {
  header: 150,
  title: 500,
  chorus: 440,
  verse: 400,
  bridge: 680,
  spoken: 360,
  code: 480,
  reboot: 400,
  footer: 110,
};
export const SPECIMEN_HEIGHT = Object.values(H).reduce((a, b) => a + b, 0);

const PAD = 96;
const DIM_ON_DARK = "rgba(237,228,211,0.6)";
const DIM_ON_PAPER = "rgba(11,11,16,0.6)";

const LABELS = [
  ["01", "封面 / 片头标题", "马善政楷书 Ma Shan Zheng"],
  ["02", "副歌爆字", "志莽行书 Zhi Mang Xing"],
  ["03", "主歌快嘴歌词", "得意黑 Smiley Sans"],
  ["04", "Bridge", "霞鹜文楷 LXGW WenKai"],
  ["05", "念白", "站酷快乐体 ZCOOL KuaiLe"],
  ["06", "代码 / 报错 / 终端", "JetBrains Mono"],
  ["07", "系统重启 / 复古段", "缝合像素 Fusion Pixel"],
] as const;

const HEADER = "千行剑 · 字体样张";
const CAPTION_DARK = "深色底：白字加青色辉光";
const CAPTION_PAPER = "浅色底：墨黑加朱砂白文印";
const CAPTION_VERTICAL = "竖排：writing-mode: vertical-rl";
const CAPTION_EGG = "封面彩蛋：RGB 错位，-> 是 JetBrains Mono 的连字";
const FOOTER = "以上字体全部是 OFL 授权，可以免费商用";
const CHORUS = ["千行剑 破长夜", "光速斩尽", "红字劫"];
const VERSE = ["霓虹淋雨 夜城不眠", "全息灯下 ", "剑影", "翩翩"];
const BRIDGE = ["剑非剑 码非码", "电子雨中 一念生花", "你若深夜 仍未眠", "我自云端 与你共天涯"];
const SPOKEN = ["哼，就这点报错？", "才、才不是为了你才修的！"];
const CODE = [
  "$ npm test -- --sword=qianhang",
  "FAIL src/jianghu.test.ts",
  "  TypeError: Cannot read properties of undefined",
  "  Segmentation fault (core dumped)",
  "PASS src/jianghu.test.ts",
  "  Tests: 1000 passed, 1000 total",
];
const EGG = "ERROR ×999+ -> 0";
const REBOOT = ["……系统重启。", "> 自检 侠义.dll ........ OK", "> 加载 青锋.sys ........ OK"];

const verseFontText = [
  HEADER,
  ...LABELS.flat(),
  CAPTION_DARK,
  CAPTION_PAPER,
  CAPTION_VERTICAL,
  CAPTION_EGG,
  FOOTER,
  ...VERSE,
].join("");

const cyanGlow = "0 0 10px rgba(25,240,200,0.9), 0 0 36px rgba(25,240,200,0.55), 0 0 90px rgba(25,240,200,0.3)";
const redGlow = "0 0 14px rgba(232,56,31,0.85), 0 0 44px rgba(232,56,31,0.5)";

const Label: React.FC<{ i: number; onPaper?: boolean }> = ({ i, onPaper = false }) => {
  const [n, role, font] = LABELS[i];
  return (
    <div
      style={{
        fontFamily: FONT.verse,
        fontSize: 30,
        display: "flex",
        gap: 20,
        alignItems: "baseline",
        color: onPaper ? DIM_ON_PAPER : DIM_ON_DARK,
      }}
    >
      <span style={{ color: onPaper ? C.red : C.cyan }}>{n}</span>
      <span>{role}</span>
      <span style={{ opacity: 0.75 }}>· {font}</span>
    </div>
  );
};

const Caption: React.FC<{ children: React.ReactNode; onPaper?: boolean }> = ({ children, onPaper = false }) => (
  <div style={{ fontFamily: FONT.verse, fontSize: 26, color: onPaper ? DIM_ON_PAPER : DIM_ON_DARK }}>{children}</div>
);

const Section: React.FC<{ height: number; bg?: string; children: React.ReactNode }> = ({
  height,
  bg = C.ink,
  children,
}) => (
  <div
    style={{
      height,
      background: bg,
      position: "relative",
      padding: `40px ${PAD}px`,
      boxSizing: "border-box",
      overflow: "hidden",
    }}
  >
    {children}
  </div>
);

const Bubble: React.FC<{ children: React.ReactNode; rotate: number }> = ({ children, rotate }) => (
  <div
    style={{
      fontFamily: FONT.spoken,
      fontSize: 64,
      color: C.ink,
      background: "#FFFFFF",
      border: `5px solid ${C.ink}`,
      borderRadius: 28,
      padding: "22px 36px",
      transform: `rotate(${rotate}deg)`,
      boxShadow: `8px 8px 0 ${C.red}`,
    }}
  >
    {children}
  </div>
);

const Tag: React.FC<{ children: React.ReactNode; color: string }> = ({ children, color }) => (
  <span style={{ background: color, color: C.ink, fontWeight: 700, padding: "0 8px" }}>{children}</span>
);

export const FontSpecimen: React.FC = () => {
  useFontsReady([
    { family: FONT.title, text: "千行剑赛博江湖" },
    { family: FONT.chorus, text: CHORUS.join("") },
    { family: FONT.verse, text: verseFontText },
    { family: FONT.bridge, text: BRIDGE.join(""), weight: 500 },
    { family: FONT.spoken, text: SPOKEN.join("") },
    { family: FONT.code, text: CODE.join("") + EGG + Object.values(C).join("") },
    { family: FONT.code, text: CODE.join("") + EGG, weight: 700 },
    { family: FONT.pixel, text: REBOOT.join("") },
  ]);

  return (
    <AbsoluteFill style={{ background: C.ink, display: "block" }}>
      {/* 标题栏和色板 */}
      <div
        style={{
          height: H.header,
          padding: `0 ${PAD}px`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid rgba(237,228,211,0.12)",
          boxSizing: "border-box",
        }}
      >
        <div style={{ fontFamily: FONT.verse, fontSize: 56, color: C.paper }}>{HEADER}</div>
        <div style={{ display: "flex", gap: 32 }}>
          {Object.values(C).map((v) => (
            <div key={v} style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 8,
                  background: v,
                  border: "1px solid rgba(237,228,211,0.3)",
                }}
              />
              <span style={{ fontFamily: FONT.code, fontSize: 22, color: DIM_ON_DARK }}>{v}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 01 标题：深色底和浅色底两种处理 */}
      <div style={{ height: H.title, display: "flex" }}>
        <div style={{ flex: 1, padding: `40px ${PAD}px`, boxSizing: "border-box" }}>
          <Label i={0} />
          <div style={{ display: "flex", alignItems: "flex-end", gap: 28, margin: "56px 0 40px" }}>
            <div style={{ fontFamily: FONT.title, fontSize: 200, lineHeight: 1, color: "#F7F2E8", textShadow: cyanGlow }}>
              千行剑
            </div>
            <Seal size={110} id="seal-dark" />
          </div>
          <Caption>{CAPTION_DARK}</Caption>
        </div>
        <div style={{ flex: 1, background: C.paper, padding: `40px ${PAD}px`, boxSizing: "border-box" }}>
          <div style={{ height: 36 }} />
          <div style={{ display: "flex", alignItems: "flex-end", gap: 28, margin: "56px 0 40px" }}>
            <div style={{ fontFamily: FONT.title, fontSize: 200, lineHeight: 1, color: C.ink }}>千行剑</div>
            <Seal size={110} id="seal-paper" />
          </div>
          <Caption onPaper>{CAPTION_PAPER}</Caption>
        </div>
      </div>

      {/* 02 副歌 */}
      <Section height={H.chorus}>
        <Label i={1} />
        <div
          style={{
            fontFamily: FONT.chorus,
            fontSize: 124,
            lineHeight: 1.15,
            color: "#F7F2E8",
            marginTop: 34,
            textShadow: "0 0 18px rgba(25,240,200,0.35)",
          }}
        >
          <div>{CHORUS[0]}</div>
          <div>
            {CHORUS[1]}
            <span style={{ color: C.red, textShadow: redGlow }}>{CHORUS[2]}</span>
          </div>
        </div>
      </Section>

      {/* 03 主歌 */}
      <Section height={H.verse}>
        <Label i={2} />
        <div style={{ fontFamily: FONT.verse, fontSize: 104, lineHeight: 1.2, color: C.paper, marginTop: 34 }}>
          <div>{VERSE[0]}</div>
          <div>
            {VERSE[1]}
            <span style={{ color: C.cyan }}>{VERSE[2]}</span>
            {VERSE[3]}
          </div>
        </div>
      </Section>

      {/* 04 Bridge：宣纸底竖排 */}
      <Section height={H.bridge} bg={C.paper}>
        <Label i={3} onPaper />
        <div style={{ position: "absolute", left: PAD, bottom: 40 }}>
          <Caption onPaper>{CAPTION_VERTICAL}</Caption>
        </div>
        <div
          style={{
            position: "absolute",
            right: PAD + 40,
            top: 50,
            writingMode: "vertical-rl",
            fontFamily: FONT.bridge,
            fontWeight: 500,
            fontSize: 52,
            lineHeight: 2,
            letterSpacing: 6,
            color: C.ink,
          }}
        >
          {BRIDGE.map((line) => (
            <div key={line}>{line}</div>
          ))}
        </div>
      </Section>

      {/* 05 念白 */}
      <Section height={H.spoken}>
        <Label i={4} />
        <div style={{ display: "flex", gap: 60, marginTop: 50, alignItems: "flex-start" }}>
          <Bubble rotate={-3}>{SPOKEN[0]}</Bubble>
          <Bubble rotate={2.5}>{SPOKEN[1]}</Bubble>
        </div>
      </Section>

      {/* 06 代码 / 报错 */}
      <Section height={H.code}>
        <Label i={5} />
        <div style={{ display: "flex", gap: 48, marginTop: 30 }}>
          <div
            style={{
              flex: 1.25,
              background: "#121219",
              border: "1px solid rgba(237,228,211,0.14)",
              borderRadius: 14,
              padding: "26px 32px",
              fontFamily: FONT.code,
              fontSize: 27,
              lineHeight: 1.6,
              color: "rgba(237,228,211,0.85)",
              whiteSpace: "pre",
            }}
          >
            <div>
              <span style={{ color: C.cyan }}>$</span>
              {CODE[0].slice(1)}
            </div>
            <div>
              <Tag color={C.red}>FAIL</Tag>
              {CODE[1].slice(4)}
            </div>
            <div style={{ color: C.red }}>{CODE[2]}</div>
            <div style={{ color: C.red }}>{CODE[3]}</div>
            <div>
              <Tag color={C.cyan}>PASS</Tag>
              {CODE[4].slice(4)}
            </div>
            <div style={{ color: C.cyan }}>{CODE[5]}</div>
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: 20 }}>
            <div
              style={{
                fontFamily: FONT.code,
                fontWeight: 700,
                fontSize: 64,
                color: C.red,
                textShadow: "4px 0 rgba(25,240,200,0.85), -4px 0 rgba(232,56,31,0.6)",
              }}
            >
              {EGG}
            </div>
            <Caption>{CAPTION_EGG}</Caption>
          </div>
        </div>
      </Section>

      {/* 07 系统重启：像素字用 12 的整数倍字号最清楚 */}
      <Section height={H.reboot} bg="#050507">
        <Label i={6} />
        <div style={{ fontFamily: FONT.pixel, color: C.paper, marginTop: 30 }}>
          <div style={{ fontSize: 96, lineHeight: 1.1, color: C.cyan, textShadow: "0 0 12px rgba(25,240,200,0.5)" }}>
            {REBOOT[0]}
          </div>
          <div style={{ fontSize: 36, lineHeight: 1.6, marginTop: 14 }}>
            {REBOOT[1].slice(0, -2)}
            <span style={{ color: C.cyan }}>OK</span>
          </div>
          <div style={{ fontSize: 36, lineHeight: 1.6 }}>
            {REBOOT[2].slice(0, -2)}
            <span style={{ color: C.cyan }}>OK</span>
            <span
              style={{
                display: "inline-block",
                width: 22,
                height: 36,
                background: C.paper,
                marginLeft: 14,
                verticalAlign: "-6px",
              }}
            />
          </div>
        </div>
      </Section>

      <div
        style={{
          height: H.footer,
          padding: `0 ${PAD}px`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: "1px solid rgba(237,228,211,0.12)",
          boxSizing: "border-box",
          fontFamily: FONT.verse,
          fontSize: 26,
          color: "rgba(237,228,211,0.5)",
        }}
      >
        <span>{FOOTER}</span>
        <span style={{ fontFamily: FONT.code }}>npx remotion still FontSpecimen</span>
      </div>
    </AbsoluteFill>
  );
};
