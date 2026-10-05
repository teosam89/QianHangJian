import React from "react";
import { Still } from "remotion";
import { FontSpecimen, SPECIMEN_HEIGHT } from "./FontSpecimen";
import { CoverTypeset, calculateCoverMetadata } from "./CoverTypeset";

export const RemotionRoot: React.FC = () => (
  <>
    <Still id="FontSpecimen" component={FontSpecimen} width={1920} height={SPECIMEN_HEIGHT} />
    {/* 封面草图放在 public/drafts/cover-draft.webp（不进仓库），尺寸自动跟随图片 */}
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
