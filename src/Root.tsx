import React from "react";
import { Still } from "remotion";
import { FontSpecimen, SPECIMEN_HEIGHT } from "./FontSpecimen";
import { CoverTypeset, calculateCoverMetadata } from "./CoverTypeset";
import { CoverSplit } from "./cover/CoverSplit";
import { CoverThrust } from "./cover/CoverThrust";
import { CoverSwords } from "./cover/CoverSwords";
import { CoverInk, CoverInkTall } from "./cover/CoverInk";
import { H, W } from "./cover/common";

export const RemotionRoot: React.FC = () => (
  <>
    <Still id="FontSpecimen" component={FontSpecimen} width={1920} height={SPECIMEN_HEIGHT} />
    {/* The cover in MOREN's layout: landscape for Bilibili and Douyin, 3:4 for Douyin's profile grid */}
    <Still id="CoverInk" component={CoverInk} width={2560} height={1440} />
    <Still id="CoverInkTall" component={CoverInkTall} width={1080} height={1440} />
    {/* 三张候选封面：分层素材放进 public/cover/，缺的图会自动画成占位 */}
    <Still id="CoverSplit" component={CoverSplit} width={W} height={H} />
    <Still id="CoverThrust" component={CoverThrust} width={W} height={H} />
    <Still id="CoverSwords" component={CoverSwords} width={W} height={H} />
    {/* 早期草图的排字预览：草图放在 public/drafts/cover-draft.webp（不进仓库），尺寸自动跟随图片 */}
    <Still
      id="CoverTypeset"
      component={CoverTypeset}
      width={1254}
      height={1254}
      defaultProps={{ background: "drafts/cover-draft.webp" }}
      calculateMetadata={calculateCoverMetadata}
    />
  </>
);
