import React from "react";
import { AbsoluteFill, Img, random } from "remotion";
import { C } from "../theme";
import { ASSET, H, W, assetSrc } from "./common";

// 千剑剑阵：一把剑复制几百份，从中心往外呈放射状飞向镜头，越靠外越大、越虚
type Sword = { x: number; y: number; rot: number; scale: number; red: boolean; depth: 0 | 1 | 2 };

export const makeSwarm = (count: number, cx: number, cy: number, seed: string): Sword[] =>
  Array.from({ length: count }, (_, i) => {
    const theta = random(`${seed}-t-${i}`) * Math.PI * 2;
    const r = Math.pow(0.12 + 0.88 * random(`${seed}-r-${i}`), 0.75);
    const x = cx + Math.cos(theta) * r * 1500;
    const y = cy + Math.sin(theta) * r * 1200;
    return {
      x,
      y,
      // 剑尖朝外：剑竖着画、尖朝上，所以在径向角度上再转 90°
      rot: (Math.atan2(y - cy, x - cx) * 180) / Math.PI + 90,
      scale: 0.18 + 1.1 * Math.pow(r, 1.7),
      red: r > 0.78 && random(`${seed}-c-${i}`) < 0.3,
      depth: r < 0.45 ? 0 : r < 0.8 ? 1 : 2,
    };
  });

const DEPTH = [
  { blur: 0, glow: 3, opacity: 0.55 },
  { blur: 1.2, glow: 5, opacity: 0.8 },
  { blur: 5, glow: 10, opacity: 0.95 },
];

// 没有 sword-single.png 时用的代码版剑：玻璃剑身里一条代码光纹、深色回车键护手、红绳剑柄、红穗，后面拖一道光尾
const SwordSymbol: React.FC<{ id: string; color: string }> = ({ id, color }) => (
  <>
    <linearGradient id={`${id}-blade`} x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stopColor={color} stopOpacity="0.25" />
      <stop offset="0.5" stopColor="#E9FFFB" stopOpacity="0.8" />
      <stop offset="1" stopColor={color} stopOpacity="0.25" />
    </linearGradient>
    <linearGradient id={`${id}-trail`} x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stopColor={color} stopOpacity="0.35" />
      <stop offset="1" stopColor={color} stopOpacity="0" />
    </linearGradient>
    <symbol id={id} viewBox="0 0 40 520">
      <polygon points="16,236 24,236 20.6,400 19.4,400" fill={`url(#${id}-trail)`} />
      <polygon points="20,0 26,22 26,150 14,150 14,22" fill={`url(#${id}-blade)`} stroke={color} strokeWidth={1.2} />
      <line x1={20} y1={24} x2={20} y2={146} stroke={color} strokeWidth={1.6} strokeDasharray="7 3 2 3" />
      <path d="M5,150 H35 V157 H11 L11,163 L5,157 Z" fill="#2B2F36" stroke={color} strokeWidth={1} />
      <rect x={16} y={157} width={8} height={40} fill="#7A1A12" />
      <circle cx={20} cy={201} r={5} fill="#6FCFB5" stroke="#2B2F36" strokeWidth={1} />
      <path d="M20,206 L15,236 M20,206 L18,238 M20,206 L22,238 M20,206 L25,236" stroke="#B0281A" strokeWidth={1} />
    </symbol>
  </>
);

export const SwordSwarm: React.FC<{ swords: Sword[] }> = ({ swords }) => {
  const src = assetSrc(ASSET.swordSingle);

  if (src) {
    // 有 GPT 出的单把剑：用图片复制。红色那部分靠色相旋转从青色变过去
    return (
      <AbsoluteFill>
        {[0, 1, 2].map((d) => (
          <AbsoluteFill key={d} style={{ opacity: DEPTH[d].opacity, filter: DEPTH[d].blur ? `blur(${DEPTH[d].blur}px)` : undefined }}>
            {swords
              .filter((s) => s.depth === d)
              .map((s, i) => {
                const h = 420 * s.scale;
                const w = h * (1152 / 2048);
                return (
                  <Img
                    key={i}
                    src={src}
                    style={{
                      position: "absolute",
                      left: s.x - w / 2,
                      top: s.y - h / 2,
                      width: w,
                      height: h,
                      transform: `rotate(${s.rot}deg)`,
                      filter: s.red
                        ? `hue-rotate(190deg) drop-shadow(0 0 ${DEPTH[d].glow}px ${C.red})`
                        : `drop-shadow(0 0 ${DEPTH[d].glow}px ${C.cyan})`,
                    }}
                  />
                );
              })}
          </AbsoluteFill>
        ))}
      </AbsoluteFill>
    );
  }

  return (
    <svg width={W} height={H} style={{ position: "absolute", inset: 0 }}>
      <defs>
        <SwordSymbol id="sword-cyan" color={C.cyan} />
        <SwordSymbol id="sword-red" color={C.red} />
        {DEPTH.map((d, i) => (
          <filter key={i} id={`swarm-depth-${i}`} x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur in="SourceGraphic" stdDeviation={d.blur} result="body" />
            <feGaussianBlur in="SourceGraphic" stdDeviation={d.glow} result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="body" />
            </feMerge>
          </filter>
        ))}
      </defs>
      {[0, 1, 2].map((d) => (
        <g key={d} filter={`url(#swarm-depth-${d})`} opacity={DEPTH[d].opacity}>
          {swords
            .filter((s) => s.depth === d)
            .map((s, i) => (
              <use
                key={i}
                href={s.red ? "#sword-red" : "#sword-cyan"}
                x={-20}
                y={-120}
                width={40}
                height={520}
                transform={`translate(${s.x} ${s.y}) rotate(${s.rot}) scale(${s.scale * 1.6})`}
              />
            ))}
        </g>
      ))}
    </svg>
  );
};
