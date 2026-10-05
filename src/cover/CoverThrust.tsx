import React from "react";
import { AbsoluteFill, Img, random } from "remotion";
import { C } from "../theme";
import { FONT, useFontsReady } from "../fonts";
import { Seal } from "../Seal";
import {
  ASSET,
  CharacterLayer,
  Egg,
  EGG,
  H,
  PaperGrain,
  Placement,
  Shard,
  Shards,
  Vignette,
  W,
  assetSrc,
  neonGlow,
  placeholderLabel,
} from "./common";

// 候选二「剑指镜头」：念白「哼，就这点报错？」。剑尖从正中刺向镜头，屏幕玻璃被刺裂
const TITLE = "千行剑";
const HOOK = ["哼，", "就这点报错？"];
const CHAR_SPEC = "1920×1920 透明底，胸像前刺";
// 剑尖落在正方形中心，脸在中心偏右上
const PLACE: Placement = { x: 450, y: -130, size: 1700, face: { x: 0.6, y: 0.3, r: 0.09 } };
const TIP = { x: PLACE.x + PLACE.size / 2, y: PLACE.y + PLACE.size / 2 };
const FACE = { x: PLACE.x + PLACE.face.x * PLACE.size, y: PLACE.y + PLACE.face.y * PLACE.size };

// 背景全用代码生成：暗底、红色虚化光斑、雨丝
const Bokeh: React.FC = () => {
  const groups = [
    { blur: 6, min: 14, max: 50, n: 34 },
    { blur: 16, min: 40, max: 110, n: 26 },
    { blur: 30, min: 90, max: 190, n: 14 },
  ];
  return (
    <svg width={W} height={H} style={{ position: "absolute", inset: 0 }}>
      <defs>
        {groups.map((g, gi) => (
          <filter key={gi} id={`bokeh-${gi}`} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation={g.blur} />
          </filter>
        ))}
      </defs>
      {groups.map((g, gi) => (
        <g key={gi} filter={`url(#bokeh-${gi})`}>
          {Array.from({ length: g.n }, (_, i) => {
            const k = `${gi}-${i}`;
            const cyan = gi === 0 && random(`bokeh-c-${k}`) < 0.12;
            return (
              <circle
                key={i}
                cx={random(`bokeh-x-${k}`) * W}
                cy={random(`bokeh-y-${k}`) * H}
                r={g.min + random(`bokeh-r-${k}`) * (g.max - g.min)}
                fill={cyan ? C.cyan : random(`bokeh-t-${k}`) < 0.5 ? C.red : "#FF6A4D"}
                opacity={0.18 + random(`bokeh-o-${k}`) * 0.4}
              />
            );
          })}
        </g>
      ))}
      {Array.from({ length: 130 }, (_, i) => {
        const x = random(`rain-x-${i}`) * (W + 300);
        const y = random(`rain-y-${i}`) * H;
        const len = 40 + random(`rain-l-${i}`) * 140;
        return (
          <line
            key={i}
            x1={x}
            y1={y}
            x2={x - len * 0.27}
            y2={y + len}
            stroke={C.paper}
            strokeWidth={1.5 + random(`rain-w-${i}`)}
            opacity={0.08 + random(`rain-o-${i}`) * 0.2}
          />
        );
      })}
    </svg>
  );
};

// 玻璃裂纹：有 thrust-crack.png 就用它（screen 叠加），没有就用代码画。避开朝脸的方向，裂纹不压脸
const faceAngle = Math.atan2(FACE.y - TIP.y, FACE.x - TIP.x);

const Crack: React.FC = () => {
  const src = assetSrc(ASSET.thrustCrack);
  if (src) {
    return (
      <Img
        src={src}
        style={{
          position: "absolute",
          inset: 0,
          width: W,
          height: H,
          objectFit: "cover",
          mixBlendMode: "screen",
          filter: "drop-shadow(0 0 6px rgba(25,240,200,0.8))",
        }}
      />
    );
  }
  const rays: string[] = [];
  for (let i = 0; i < 16; i++) {
    const base = (i / 16) * Math.PI * 2 + random(`ray-j-${i}`) * 0.3;
    const off = Math.atan2(Math.sin(base - faceAngle), Math.cos(base - faceAngle));
    if (Math.abs(off) < 0.5) continue;
    const length = 260 + random(`ray-l-${i}`) * 480;
    const pts: string[] = [`${TIP.x},${TIP.y}`];
    let a = base;
    for (let s = 1; s <= 7; s++) {
      a += (random(`ray-a-${i}-${s}`) - 0.5) * 0.35;
      const d = (length * s) / 7;
      pts.push(`${TIP.x + Math.cos(a) * d},${TIP.y + Math.sin(a) * d}`);
    }
    rays.push(pts.join(" "));
  }
  const rings = [110, 210].map((radius, ri) => {
    const arcs: string[] = [];
    for (let s = 0; s < 14; s++) {
      if (random(`ring-gap-${ri}-${s}`) < 0.35) continue;
      const a0 = (s / 14) * Math.PI * 2;
      const a1 = ((s + 1) / 14) * Math.PI * 2;
      const r0 = radius * (0.9 + random(`ring-r0-${ri}-${s}`) * 0.2);
      const r1 = radius * (0.9 + random(`ring-r1-${ri}-${s}`) * 0.2);
      arcs.push(
        `${TIP.x + Math.cos(a0) * r0},${TIP.y + Math.sin(a0) * r0} ${TIP.x + Math.cos(a1) * r1},${TIP.y + Math.sin(a1) * r1}`,
      );
    }
    return arcs;
  });
  return (
    <svg width={W} height={H} style={{ position: "absolute", inset: 0, mixBlendMode: "screen" }}>
      <defs>
        <filter id="crack-glow" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="4" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#crack-glow)" fill="none" stroke="#E9FFFB" strokeLinejoin="round">
        {rays.map((p, i) => (
          <polyline key={i} points={p} strokeWidth={2.6} opacity={0.85} />
        ))}
        {rings.flat().map((p, i) => (
          <polyline key={`r${i}`} points={p} strokeWidth={1.8} opacity={0.7} />
        ))}
      </g>
      <circle cx={TIP.x} cy={TIP.y} r={26} fill="#E9FFFB" opacity={0.9} filter="url(#crack-glow)" />
    </svg>
  );
};

// 红色碎片从剑尖往外飞，越远越大越虚，像冲着观众飞来
const shards: Shard[] = Array.from({ length: 60 }, (_, i) => {
  const a = random(`th-a-${i}`) * Math.PI * 2;
  const r = 140 + Math.pow(random(`th-r-${i}`), 0.8) * 1100;
  const size = 8 + (r / 1240) * 60 * (0.5 + random(`th-s-${i}`));
  return {
    x: TIP.x + Math.cos(a) * r,
    y: TIP.y + Math.sin(a) * r * 0.8,
    w: size * (0.6 + random(`th-w-${i}`)),
    h: size,
    rot: random(`th-rot-${i}`) * 90,
    color: random(`th-c-${i}`) < 0.8 ? C.red : C.cyan,
    blur: r > 800 ? 4 : 0,
  };
});

// 念白气泡：白底黑字，尾巴指向她的嘴
const Bubble: React.FC<{ fontSize: number }> = ({ fontSize }) => {
  const left = W * 0.655;
  const top = H * 0.05;
  return (
    <div style={{ position: "absolute", left, top, transform: "rotate(3deg)" }}>
      <svg
        width={200}
        height={200}
        style={{ position: "absolute", left: -110, top: fontSize * 2.2, overflow: "visible" }}
      >
        <polygon points="150,0 200,40 0,190" fill="#FFFFFF" stroke={C.ink} strokeWidth={6} strokeLinejoin="round" />
      </svg>
      <div
        style={{
          position: "relative",
          fontFamily: FONT.spoken,
          fontSize,
          lineHeight: 1.2,
          color: C.ink,
          background: "#FFFFFF",
          border: `6px solid ${C.ink}`,
          borderRadius: fontSize * 0.6,
          padding: `${fontSize * 0.32}px ${fontSize * 0.45}px`,
          boxShadow: `12px 12px 0 ${C.red}`,
        }}
      >
        <div>{HOOK[0]}</div>
        <div>{HOOK[1]}</div>
      </div>
    </div>
  );
};

export const CoverThrust: React.FC = () => {
  useFontsReady([
    { family: FONT.title, text: TITLE + "赛博江湖" },
    { family: FONT.spoken, text: HOOK.join("") },
    { family: FONT.code, text: EGG, weight: 700 },
    { family: FONT.verse, text: placeholderLabel(ASSET.thrustChar, CHAR_SPEC) },
  ]);
  const title = H * 0.15;

  return (
    <AbsoluteFill
      style={{ background: `radial-gradient(ellipse at 55% 48%, #2a0d10 0%, #160709 45%, ${C.ink} 100%)` }}
    >
      <Bokeh />
      <Shards shards={shards} />
      <CharacterLayer file={ASSET.thrustChar} spec={CHAR_SPEC} place={PLACE} />
      <Crack />
      <Vignette strength={0.6} />

      {/* 标题：左侧三分之一，竖排白字加青光，印章在下方 */}
      <div
        style={{
          position: "absolute",
          left: W * 0.07,
          top: H * 0.17,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: H * 0.025,
        }}
      >
        <div
          style={{
            writingMode: "vertical-rl",
            fontFamily: FONT.title,
            fontSize: title,
            lineHeight: 1,
            color: "#F7F2E8",
            textShadow: neonGlow(H * 0.008),
          }}
        >
          {TITLE}
        </div>
        <Seal size={H * 0.08} id="thrust-seal" />
      </div>

      <Bubble fontSize={title * 0.55} />
      <Egg />
      <PaperGrain />
    </AbsoluteFill>
  );
};
