import React from "react";
import { AbsoluteFill, CalculateMetadataFunction, Img, staticFile, useVideoConfig } from "remotion";
import { C } from "./theme";
import { FONT, useFontsReady } from "./fonts";
import { Seal } from "./Seal";

// 封面排字：版式见 prompts/cover.md「标题和文字」
export type CoverTypesetProps = { background: string };

const TITLE = "千行剑";
const HOOK = "一剑劈开数据界";

// 画布尺寸跟着封面图走，方形和 16:9 都能直接套
export const calculateCoverMetadata: CalculateMetadataFunction<CoverTypesetProps> = async ({ props }) => {
  const img = new Image();
  img.src = staticFile(props.background);
  await img.decode();
  return { width: img.naturalWidth, height: img.naturalHeight };
};

// 墨黑字外面的一圈宣纸色发光，让题字从水墨背景里跳出来
const paperGlow = (r: number) =>
  `0 0 ${r}px rgba(237,228,211,0.95), 0 0 ${r * 2.5}px rgba(237,228,211,0.75), 0 0 ${r * 5}px rgba(237,228,211,0.45)`;

export const CoverTypeset: React.FC<CoverTypesetProps> = ({ background }) => {
  const { width: W, height: H } = useVideoConfig();
  useFontsReady([
    { family: FONT.title, text: TITLE + "赛博江湖" },
    { family: FONT.bridge, text: HOOK, weight: 500 },
  ]);
  const title = H * 0.13;

  return (
    <AbsoluteFill>
      <Img src={staticFile(background)} style={{ width: "100%", height: "100%", objectFit: "cover" }} />

      {/* 题字：右下水墨区，标题和钩子句竖排，印章盖在标题下方 */}
      <div
        style={{
          position: "absolute",
          right: W * 0.035,
          top: H * 0.4,
          display: "flex",
          flexDirection: "row-reverse",
          alignItems: "flex-start",
          gap: H * 0.014,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: H * 0.018 }}>
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
          <Seal size={H * 0.075} id="cover-seal" />
        </div>
        <div
          style={{
            writingMode: "vertical-rl",
            fontFamily: FONT.bridge,
            fontWeight: 500,
            fontSize: H * 0.034,
            letterSpacing: H * 0.006,
            color: C.ink,
            marginTop: title * 0.45,
            textShadow: paperGlow(H * 0.004),
          }}
        >
          {HOOK}
        </div>
      </div>
    </AbsoluteFill>
  );
};
