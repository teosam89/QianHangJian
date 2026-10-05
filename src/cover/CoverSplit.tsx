import React from "react";
import { AbsoluteFill, random } from "remotion";
import { C } from "../theme";
import { FONT, useFontsReady } from "../fonts";
import { Seal } from "../Seal";
import {
  ASSET,
  BackgroundLayer,
  CharacterLayer,
  Egg,
  EGG,
  GlitchBlocks,
  H,
  PaperGrain,
  Placement,
  Shard,
  Shards,
  Vignette,
  W,
  paperGlow,
  placeholderLabel,
} from "./common";

// 候选一「一剑劈开」：终副歌红转青。青色斩线从右上角劈到左下角，左上是报错的城，右下是修好的水墨城
const TITLE = "千行剑";
const HOOK = "一剑劈开数据界";
const CHAR_SPEC = "1920×1920 透明底，半身回头坏笑";
const PLACE: Placement = { x: 330, y: -40, size: 1560, face: { x: 0.47, y: 0.22, r: 0.085 } };

// 斩线方向和法线，碎片沿法线往两边飞，大部分飞向报错那一侧
const LEN = Math.hypot(W, H);
const NX = H / LEN;
const NY = W / LEN;

const shards: Shard[] = Array.from({ length: 110 }, (_, i) => {
  const t = 0.04 + random(`split-t-${i}`) * 0.92;
  const side = random(`split-side-${i}`) < 0.7 ? -1 : 1;
  const dist = Math.pow(random(`split-d-${i}`), 1.6) * 190 + 6;
  const size = 8 + random(`split-s-${i}`) * 38;
  const roll = random(`split-c-${i}`);
  return {
    x: W * (1 - t) + side * NX * dist,
    y: H * t + side * NY * dist,
    w: size * (0.6 + random(`split-a-${i}`) * 1.4),
    h: size,
    rot: random(`split-r-${i}`) * 90,
    color: roll < 0.72 ? C.red : roll < 0.9 ? C.ink : C.cyan,
    blur: dist > 120 ? 2 : 0,
  };
});

const CutLine: React.FC = () => (
  <svg width={W} height={H} style={{ position: "absolute", inset: 0 }}>
    <defs>
      <filter id="cut-wide" x="-10%" y="-10%" width="120%" height="120%">
        <feGaussianBlur stdDeviation="22" />
      </filter>
      <filter id="cut-mid" x="-10%" y="-10%" width="120%" height="120%">
        <feGaussianBlur stdDeviation="6" />
      </filter>
    </defs>
    <line x1={W} y1={0} x2={0} y2={H} stroke={C.cyan} strokeWidth={70} opacity={0.22} filter="url(#cut-wide)" />
    <line x1={W} y1={0} x2={0} y2={H} stroke={C.cyan} strokeWidth={18} opacity={0.75} filter="url(#cut-mid)" />
    <line x1={W} y1={0} x2={0} y2={H} stroke="#E9FFFB" strokeWidth={5} />
  </svg>
);

export const CoverSplit: React.FC = () => {
  useFontsReady([
    { family: FONT.title, text: TITLE + "赛博江湖" },
    { family: FONT.bridge, text: HOOK, weight: 700 },
    { family: FONT.code, text: EGG, weight: 700 },
    {
      family: FONT.verse,
      text:
        placeholderLabel(ASSET.splitChar, CHAR_SPEC) +
        placeholderLabel(ASSET.splitBgClean, "2560×1440") +
        placeholderLabel(ASSET.splitBgCorrupt, "2560×1440"),
    },
  ]);
  const title = H * 0.13;

  return (
    <AbsoluteFill style={{ background: C.ink }}>
      <BackgroundLayer
        file={ASSET.splitBgClean}
        spec="2560×1440"
        fallback={<AbsoluteFill style={{ background: "linear-gradient(160deg, #34343a 0%, #8f887d 45%, #d9d0bf 100%)" }} />}
        labelStyle={{ right: 40, bottom: 40 }}
      />

      {/* 报错态只留斩线左上方的三角，沿法线往外错开一点，露出一道缝 */}
      <AbsoluteFill style={{ clipPath: `polygon(0 0, ${W}px 0, 0 ${H}px)`, transform: "translate(-9px, -5px)" }}>
        <BackgroundLayer
          file={ASSET.splitBgCorrupt}
          spec="2560×1440"
          fallback={
            <AbsoluteFill style={{ background: "linear-gradient(135deg, #0f0608 0%, #4a0d0e 55%, #8a1a12 100%)" }}>
              <GlitchBlocks seed="split-glitch" count={60} />
            </AbsoluteFill>
          }
          labelStyle={{ left: 40, top: 150 }}
        />
      </AbsoluteFill>

      <CutLine />
      <Shards shards={shards} />
      <CharacterLayer file={ASSET.splitChar} spec={CHAR_SPEC} place={PLACE} />
      <Vignette strength={0.45} />

      {/* 题字：右下水墨区，标题和钩子句竖排，印章在标题下方 */}
      <div
        style={{
          position: "absolute",
          right: W * 0.045,
          top: H * 0.26,
          display: "flex",
          flexDirection: "row-reverse",
          alignItems: "flex-start",
          gap: H * 0.02,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: H * 0.02 }}>
          <div
            style={{
              writingMode: "vertical-rl",
              fontFamily: FONT.title,
              fontSize: title,
              lineHeight: 1,
              color: C.ink,
              textShadow: paperGlow(H * 0.008),
            }}
          >
            {TITLE}
          </div>
          <Seal size={H * 0.075} id="split-seal" />
        </div>
        <div
          style={{
            writingMode: "vertical-rl",
            fontFamily: FONT.bridge,
            fontWeight: 700,
            fontSize: title * 0.6,
            lineHeight: 1,
            letterSpacing: title * 0.04,
            color: C.ink,
            marginTop: title * 0.5,
            textShadow: paperGlow(H * 0.006),
          }}
        >
          {HOOK}
        </div>
      </div>

      <Egg />
      <PaperGrain />
    </AbsoluteFill>
  );
};
