import React from "react";
import { AbsoluteFill, random } from "remotion";
import { C } from "../theme";
import { FONT, useFontsReady } from "../fonts";
import { Seal } from "../Seal";
import {
  ASSET,
  BackgroundLayer,
  CharacterLayer,
  H,
  PaperGrain,
  Placement,
  Vignette,
  W,
  neonGlow,
  placeholderLabel,
} from "./common";
import { SwordSwarm, makeSwarm } from "./SwordSwarm";

// 候选三「千剑齐发」：终副歌。她抬手一挥，身后上千把青色代码剑飞向镜头，外圈还残留一点红
const TITLE = "千行剑";
const HOOK = "万般漏洞皆可解";
const CHAR_SPEC = "1920×1920 透明底，半身正面挥手";
const PLACE: Placement = { x: 480, y: -10, size: 1600, face: { x: 0.5, y: 0.24, r: 0.085 } };
// 剑阵中心在她脑后
const CENTER = { x: W / 2, y: PLACE.y + PLACE.face.y * PLACE.size };
const swords = makeSwarm(320, CENTER.x, CENTER.y, "swarm");

// 背景占位：夜空加底部城市剪影，红色报错像雨一样往下落
const SkyFallback: React.FC = () => (
  <AbsoluteFill style={{ background: `radial-gradient(ellipse at 50% 30%, #10262A 0%, #0D1416 45%, ${C.ink} 100%)` }}>
    <svg width={W} height={H} style={{ position: "absolute", inset: 0 }}>
      {Array.from({ length: 150 }, (_, i) => {
        const x = random(`red-rain-x-${i}`) * W;
        const y = random(`red-rain-y-${i}`) * H * 0.85;
        const len = 14 + random(`red-rain-l-${i}`) * 50;
        return (
          <rect
            key={i}
            x={x}
            y={y}
            width={3 + random(`red-rain-w-${i}`) * 5}
            height={len}
            fill={C.red}
            opacity={0.25 + random(`red-rain-o-${i}`) * 0.5}
          />
        );
      })}
      <path
        d={`M0,${H} L0,${H * 0.86} L180,${H * 0.84} L240,${H * 0.78} L300,${H * 0.84} L620,${H * 0.85} L700,${H * 0.76} L760,${H * 0.85} L1200,${H * 0.87} L1300,${H * 0.8} L1380,${H * 0.87} L1900,${H * 0.85} L1960,${H * 0.77} L2020,${H * 0.85} L2380,${H * 0.83} L2440,${H * 0.79} L2500,${H * 0.84} L${W},${H * 0.85} L${W},${H} Z`}
        fill="#07070A"
      />
    </svg>
  </AbsoluteFill>
);

export const CoverSwords: React.FC = () => {
  useFontsReady([
    { family: FONT.title, text: TITLE + "赛博江湖" },
    { family: FONT.bridge, text: HOOK, weight: 700 },
    {
      family: FONT.verse,
      text: placeholderLabel(ASSET.swordsChar, CHAR_SPEC) + placeholderLabel(ASSET.swordsBg, "2560×1440"),
    },
  ]);
  const title = H * 0.14;

  return (
    <AbsoluteFill style={{ background: C.ink }}>
      <BackgroundLayer
        file={ASSET.swordsBg}
        spec="2560×1440"
        fallback={<SkyFallback />}
        labelStyle={{ right: 40, top: 40 }}
      />
      {/* 剑阵中心的青色光晕，给她打背光 */}
      <AbsoluteFill
        style={{
          background: `radial-gradient(circle at ${CENTER.x}px ${CENTER.y}px, rgba(25,240,200,0.45) 0%, rgba(25,240,200,0.12) 18%, rgba(25,240,200,0) 40%)`,
        }}
      />
      <SwordSwarm swords={swords} />
      <CharacterLayer file={ASSET.swordsChar} spec={CHAR_SPEC} place={PLACE} />
      {/* 底部压暗，给标题让出一条安静的带子 */}
      <AbsoluteFill
        style={{ background: "linear-gradient(180deg, rgba(11,11,16,0) 60%, rgba(11,11,16,0.75) 78%, rgba(11,11,16,0.92) 100%)" }}
      />
      <Vignette strength={0.5} />

      {/* 标题横排放底部正中，印章在右边，钩子句在下面 */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: H * 0.69,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: H * 0.012,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: title * 0.18 }}>
          <div
            style={{
              fontFamily: FONT.title,
              fontSize: title,
              lineHeight: 1,
              letterSpacing: title * 0.18,
              color: "#F7F2E8",
              textShadow: neonGlow(H * 0.008),
            }}
          >
            {TITLE}
          </div>
          <Seal size={H * 0.08} id="swords-seal" />
        </div>
        <div
          style={{
            fontFamily: FONT.bridge,
            fontWeight: 700,
            fontSize: title * 0.6,
            lineHeight: 1,
            letterSpacing: title * 0.06,
            color: "#F7F2E8",
            textShadow: neonGlow(H * 0.005),
          }}
        >
          {HOOK}
        </div>
      </div>

      <PaperGrain />
    </AbsoluteFill>
  );
};
