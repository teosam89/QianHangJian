import React from "react";
import { AbsoluteFill, Img, getStaticFiles, random, staticFile } from "remotion";
import { C } from "../theme";
import { FONT } from "../fonts";

// 三张候选封面共用的画布、素材路径、占位和特效。方案见 prompts/cover.md「定稿：三张候选」
export const W = 2560;
export const H = 1440;

// GPT 出的分层素材放进 public/cover/，文件名和 prompts/cover.md 的出图清单一一对应
export const ASSET = {
  splitBgClean: "cover/split-bg-clean.png",
  splitBgCorrupt: "cover/split-bg-corrupt.png",
  splitChar: "cover/split-char.png",
  thrustChar: "cover/thrust-char.png",
  thrustCrack: "cover/thrust-crack.png",
  swordsBg: "cover/swords-bg.png",
  swordsChar: "cover/swords-char.png",
  swordSingle: "cover/sword-single.png",
} as const;

// 图还没出时返回 null，调用方改画占位
export const assetSrc = (name: string): string | null =>
  getStaticFiles().some((f) => f.name === name) ? staticFile(name) : null;

export const EGG = "ERROR ×999+ -> 0";

// 白字：贴字一圈暗边保证可读，外面是青色辉光
export const neonGlow = (r: number) =>
  `0 0 ${r * 1.2}px rgba(11,11,16,0.95), 0 0 ${r}px rgba(25,240,200,0.95), 0 0 ${r * 3}px rgba(25,240,200,0.6), 0 0 ${r * 7}px rgba(25,240,200,0.3)`;

// 墨黑字：外面一圈宣纸色发光，从水墨背景里跳出来
export const paperGlow = (r: number) =>
  `0 0 ${r}px rgba(237,228,211,0.95), 0 0 ${r * 2.5}px rgba(237,228,211,0.75), 0 0 ${r * 5}px rgba(237,228,211,0.45)`;

export const placeholderLabel = (file: string, spec: string) => `占位 public/${file}（${spec}）`;

const Label: React.FC<{ text: string; style: React.CSSProperties }> = ({ text, style }) => (
  <div
    style={{
      position: "absolute",
      fontFamily: FONT.verse,
      fontSize: 30,
      color: C.paper,
      background: "rgba(11,11,16,0.6)",
      border: "2px dashed rgba(25,240,200,0.7)",
      padding: "6px 14px",
      whiteSpace: "nowrap",
      ...style,
    }}
  >
    {text}
  </div>
);

export const BackgroundLayer: React.FC<{
  file: string;
  spec: string;
  fallback: React.ReactNode;
  labelStyle: React.CSSProperties;
}> = ({ file, spec, fallback, labelStyle }) => {
  const src = assetSrc(file);
  if (src) {
    return <Img src={src} style={{ position: "absolute", inset: 0, width: W, height: H, objectFit: "cover" }} />;
  }
  return (
    <AbsoluteFill>
      {fallback}
      <Label text={placeholderLabel(file, spec)} style={labelStyle} />
    </AbsoluteFill>
  );
};

// 角色层是正方形透明 PNG。face 是脸在这张正方形里的相对位置，占位时画出来，方便检查字有没有压到脸
export type Placement = { x: number; y: number; size: number; face: { x: number; y: number; r: number } };

export const CharacterLayer: React.FC<{ file: string; spec: string; place: Placement }> = ({ file, spec, place }) => {
  const src = assetSrc(file);
  const { x, y, size, face } = place;
  if (src) {
    return <Img src={src} style={{ position: "absolute", left: x, top: y, width: size, height: size }} />;
  }
  const fx = face.x * size;
  const fy = face.y * size;
  const fr = face.r * size;
  const sy = fy + fr * 1.5;
  const half = size * 0.36;
  const body = `M${fx - half},${size} C${fx - half},${sy + size * 0.12} ${fx - size * 0.2},${sy} ${fx},${sy} C${fx + size * 0.2},${sy} ${fx + half},${sy + size * 0.12} ${fx + half},${size} Z`;
  const shape = {
    fill: "rgba(237,228,211,0.12)",
    stroke: "rgba(25,240,200,0.8)",
    strokeWidth: 5,
    strokeDasharray: "22 14",
  };
  const visibleBottom = Math.min(y + size, H);
  return (
    <>
      <svg width={size} height={size} style={{ position: "absolute", left: x, top: y, overflow: "visible" }}>
        <path d={body} {...shape} />
        <circle cx={fx} cy={fy} r={fr} {...shape} />
      </svg>
      <Label
        text={placeholderLabel(file, spec)}
        style={{ left: x + size / 2, top: visibleBottom - 90, transform: "translateX(-50%)" }}
      />
    </>
  );
};

export const PaperGrain: React.FC = () => (
  <AbsoluteFill style={{ mixBlendMode: "overlay", opacity: 0.16, pointerEvents: "none" }}>
    <svg width={W} height={H}>
      <filter id="paper-grain">
        <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" seed="2" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width={W} height={H} filter="url(#paper-grain)" />
    </svg>
  </AbsoluteFill>
);

export const Vignette: React.FC<{ strength?: number }> = ({ strength = 0.55 }) => (
  <AbsoluteFill
    style={{
      background: `radial-gradient(ellipse at center, rgba(11,11,16,0) 55%, rgba(11,11,16,${strength}) 100%)`,
      pointerEvents: "none",
    }}
  />
);

export const Egg: React.FC = () => (
  <div
    style={{
      position: "absolute",
      left: W * 0.028,
      top: H * 0.04,
      fontFamily: FONT.code,
      fontWeight: 700,
      fontSize: H * 0.03,
      color: C.red,
      background: "rgba(11,11,16,0.82)",
      padding: `${H * 0.006}px ${H * 0.014}px`,
      textShadow: `${H * 0.0025}px 0 rgba(25,240,200,0.9), ${-H * 0.0025}px 0 rgba(232,56,31,0.6)`,
    }}
  >
    {EGG}
  </div>
);

// 红色报错碎片：沿一条线或从一个点往外飞
export type Shard = { x: number; y: number; w: number; h: number; rot: number; color: string; blur: number };

export const Shards: React.FC<{ shards: Shard[] }> = ({ shards }) => (
  <AbsoluteFill style={{ pointerEvents: "none" }}>
    {shards.map((s, i) => (
      <div
        key={i}
        style={{
          position: "absolute",
          left: s.x - s.w / 2,
          top: s.y - s.h / 2,
          width: s.w,
          height: s.h,
          background: s.color,
          transform: `rotate(${s.rot}deg)`,
          filter: s.blur > 0 ? `blur(${s.blur}px)` : undefined,
          boxShadow: s.color === C.red ? "0 0 12px rgba(232,56,31,0.7)" : undefined,
        }}
      />
    ))}
  </AbsoluteFill>
);

// 报错态占位用的红色故障块
export const GlitchBlocks: React.FC<{ seed: string; count: number }> = ({ seed, count }) => (
  <AbsoluteFill>
    {Array.from({ length: count }, (_, i) => {
      const w = 40 + random(`${seed}-w-${i}`) * 420;
      const h = 8 + random(`${seed}-h-${i}`) * 60;
      return (
        <div
          key={i}
          style={{
            position: "absolute",
            left: random(`${seed}-x-${i}`) * W - w / 2,
            top: random(`${seed}-y-${i}`) * H,
            width: w,
            height: h,
            background: random(`${seed}-c-${i}`) < 0.75 ? C.red : C.ink,
            opacity: 0.25 + random(`${seed}-o-${i}`) * 0.6,
          }}
        />
      );
    })}
  </AbsoluteFill>
);
