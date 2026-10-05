import React from "react";
import { AbsoluteFill, Img, staticFile } from "remotion";
import { C } from "../theme";
import { FONT, useFontsReady } from "../fonts";
import { Seal } from "../Seal";

// The cover in MOREN's layout (owner: 「其实我觉得封面图不要那么绚丽 彩色污染 可以类似moren的cover那样」; see
// ../moren/src/mv/CoverStill.tsx): paper and an ink panel cut on a diagonal with a cinnabar seam, cinnabar as the only
// accent, big type, and her as a cut-out. She thrusts the sword out of the left edge at the viewer, so MOREN's layout
// is mirrored: she stands flush left and the panel covers the right edge of her picture, where the sleeve is cut.
// Never flip her picture (STYLE_BIBLE §8).

const CHAR = "cover/thrust-char.png"; // 1086×1448 from ChatGPT, keyed with tools/key_flat.py
const TITLE_A = "千行";
const TITLE_B = "剑";
const HOOK_A = "哼，就这点";
const HOOK_B = "报错";
const HOOK_C = "？";
const TAGS = ["#剑灵", "#傲娇"] as const;

const useCoverFonts = () =>
  useFontsReady([
    { family: FONT.title, text: TITLE_A + TITLE_B + "赛博江湖" },
    { family: FONT.spoken, text: HOOK_A + HOOK_B + HOOK_C },
    { family: FONT.verse, text: TAGS.join("") },
  ]);

const Grid: React.FC<{ step: number; color: string }> = ({ step, color }) => (
  <AbsoluteFill
    style={{
      backgroundImage: `linear-gradient(${color} 2px, transparent 2px), linear-gradient(90deg, ${color} 2px, transparent 2px)`,
      backgroundSize: `${step}px ${step}px`,
    }}
  />
);

const Grain: React.FC<{ w: number; h: number; id: string }> = ({ w, h, id }) => (
  <AbsoluteFill style={{ mixBlendMode: "overlay", opacity: 0.14, pointerEvents: "none" }}>
    <svg width={w} height={h}>
      <filter id={id}>
        <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" seed="2" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width={w} height={h} filter={`url(#${id})`} />
    </svg>
  </AbsoluteFill>
);

/** A paper luggage tag on a cinnabar string, as on the MOREN cover. */
const Tag: React.FC<{ x: number; y: number; w: number; label: string; rot: number }> = ({ x, y, w, label, rot }) => {
  const h = w * 0.46;
  return (
    <div style={{ position: "absolute", left: x - w / 2, top: y - h / 2, width: w, height: h, transform: `rotate(${rot}deg)` }}>
      <div style={{ position: "absolute", left: -w * 0.2, top: h / 2 - 2, width: w * 0.27, height: 4, background: C.red, rotate: "-18deg" }} />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: C.paper,
          border: `${w * 0.022}px solid ${C.red}`,
          borderRadius: w * 0.05,
          boxShadow: `0 ${w * 0.02}px ${w * 0.05}px rgba(0,0,0,.3)`,
        }}
      />
      <div style={{ position: "absolute", left: w * 0.07, top: h / 2 - w * 0.035, width: w * 0.07, height: w * 0.07, borderRadius: "50%", background: C.ink, opacity: 0.85 }} />
      <div
        style={{
          position: "absolute",
          left: w * 0.18,
          right: w * 0.04,
          top: 0,
          bottom: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: FONT.verse,
          fontSize: w * 0.25,
          color: C.ink,
        }}
      >
        {label}
      </div>
    </div>
  );
};

/** Ink panel with its faint grid and a ghost 「剑」, clipped to a polygon; the seam is drawn separately. */
const InkPanel: React.FC<{ clip: string; ghost: { x: number; y: number; size: number } }> = ({ clip, ghost }) => (
  <AbsoluteFill style={{ clipPath: clip, background: C.ink }}>
    <Grid step={80} color="rgba(237,228,211,0.05)" />
    <div
      style={{
        position: "absolute",
        left: ghost.x,
        top: ghost.y,
        fontFamily: FONT.title,
        fontSize: ghost.size,
        lineHeight: 1,
        color: "transparent",
        WebkitTextStroke: "4px rgba(237,228,211,0.06)",
      }}
    >
      {TITLE_B}
    </div>
  </AbsoluteFill>
);

const Seam: React.FC<{ w: number; h: number; x1: number; y1: number; x2: number; y2: number }> = ({ w, h, x1, y1, x2, y2 }) => (
  <svg style={{ position: "absolute", left: 0, top: 0, width: w, height: h }}>
    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={C.red} strokeWidth={64} opacity={0.22} />
    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={C.red} strokeWidth={24} />
  </svg>
);

const Title: React.FC<{ size: number }> = ({ size }) => (
  <div style={{ fontFamily: FONT.title, fontSize: size, lineHeight: 1, color: C.paper, whiteSpace: "nowrap" }}>
    {TITLE_A}
    <span style={{ color: C.red }}>{TITLE_B}</span>
  </div>
);

const Hook: React.FC<{ size: number }> = ({ size }) => (
  <div style={{ fontFamily: FONT.spoken, fontSize: size, lineHeight: 1.1, color: C.paper, whiteSpace: "nowrap", transform: "rotate(-4deg)", transformOrigin: "0 0" }}>
    {HOOK_A}
    <span style={{ color: C.red }}>{HOOK_B}</span>
    {HOOK_C}
  </div>
);

// Landscape 2560×1440 for Bilibili and Douyin. Her face and the title sit inside the central 4:3 (x 320–2240).
const W = 2560;
const H = 1440;
// x of the seam at the top and bottom edges. Her picture's right edge is x 1080 and is touched from y ≈ 520 down, so
// the seam must be left of it there and right of her monocle (x ≈ 985 at y ≈ 440).
const SEAM = { top: 1110, bottom: 960 };

export const CoverInk: React.FC = () => {
  useCoverFonts();
  const dx = (SEAM.bottom - SEAM.top) / H;
  return (
    <AbsoluteFill style={{ background: C.paper, overflow: "hidden" }}>
      <Grid step={80} color="rgba(11,11,16,0.06)" />
      <Img src={staticFile(CHAR)} style={{ position: "absolute", left: 0, top: 0, height: H, filter: "drop-shadow(16px 10px 0 rgba(11,11,16,0.16))" }} />
      <InkPanel
        clip={`polygon(${SEAM.top}px 0, ${W}px 0, ${W}px ${H}px, ${SEAM.bottom}px ${H}px)`}
        ghost={{ x: 1480, y: 120, size: 1250 }}
      />
      <Seam w={W} h={H} x1={SEAM.top - 40 * dx} y1={-40} x2={SEAM.bottom + 40 * dx} y2={H + 40} />

      <Tag x={1180} y={150} w={250} label={TAGS[0]} rot={-14} />
      <Tag x={2330} y={1290} w={240} label={TAGS[1]} rot={12} />

      {/* title and hook centred on the panel's height */}
      <div style={{ position: "absolute", left: 1270, top: 420, display: "flex", alignItems: "flex-end", gap: 34 }}>
        <Title size={300} />
        <div style={{ marginBottom: 22 }}>
          <Seal size={104} id="ink-seal" />
        </div>
      </div>
      <div style={{ position: "absolute", left: 1290, top: 840 }}>
        <Hook size={112} />
      </div>
      <Grain w={W} h={H} id="ink-grain" />
    </AbsoluteFill>
  );
};

// Portrait 1080×1440 for Douyin's profile grid: her picture fills the frame, and the panel is a band across the
// bottom that covers the tassel and the cut skirt.
const TW = 1080;
const TH = 1440;
const BAND = { left: 1030, right: 900 }; // y of the band's top edge at the left and right edges

export const CoverInkTall: React.FC = () => {
  useCoverFonts();
  const dy = (BAND.right - BAND.left) / TW;
  return (
    <AbsoluteFill style={{ background: C.paper, overflow: "hidden" }}>
      <Grid step={80} color="rgba(11,11,16,0.06)" />
      <Img src={staticFile(CHAR)} style={{ position: "absolute", left: 0, top: 0, width: TW, height: TH, objectFit: "cover" }} />
      <InkPanel
        clip={`polygon(0 ${BAND.left}px, ${TW}px ${BAND.right}px, ${TW}px ${TH}px, 0 ${TH}px)`}
        ghost={{ x: 640, y: 860, size: 640 }}
      />
      <Seam w={TW} h={TH} x1={-40} y1={BAND.left - 40 * dy} x2={TW + 40} y2={BAND.right + 40 * dy} />

      <Tag x={150} y={92} w={220} label={TAGS[1]} rot={-10} />
      <Tag x={905} y={1365} w={210} label={TAGS[0]} rot={10} />

      <div style={{ position: "absolute", left: 66, top: 1068, display: "flex", alignItems: "flex-end", gap: 22 }}>
        <Title size={200} />
        <div style={{ marginBottom: 14 }}>
          <Seal size={74} id="ink-seal-tall" />
        </div>
      </div>
      <div style={{ position: "absolute", left: 74, top: 1300 }}>
        <Hook size={70} />
      </div>
      <Grain w={TW} h={TH} id="ink-grain-tall" />
    </AbsoluteFill>
  );
};
