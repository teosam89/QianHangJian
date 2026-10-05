import React from "react";
import { C } from "./theme";
import { FONT } from "./fonts";

type Props = {
  size: number;
  id: string;
  // 按印章读法排：右列从上到下，再左列从上到下
  chars?: [string, string, string, string];
};

// 白文印：朱砂底，字留出宣纸色，边缘和印面做出破损
export const Seal: React.FC<Props> = ({ size, id, chars = ["赛", "博", "江", "湖"] }) => {
  const [r1, r2, l1, l2] = chars;
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: "block", overflow: "visible" }}>
      <defs>
        <filter id={`${id}-wear`} x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="11" result="grain" />
          <feColorMatrix
            in="grain"
            type="matrix"
            values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  -14 0 0 0 10.6"
            result="holes"
          />
          <feComposite in="SourceGraphic" in2="holes" operator="in" result="worn" />
          <feTurbulence type="fractalNoise" baseFrequency="0.06" numOctaves="2" seed="4" result="warp" />
          <feDisplacementMap in="worn" in2="warp" scale="3.5" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
      <g filter={`url(#${id}-wear)`}>
        <rect x="5" y="5" width="90" height="90" rx="5" fill={C.red} />
        <g fill={C.paper} fontFamily={FONT.title} fontSize="40" textAnchor="middle">
          <text x="71" y="45">{r1}</text>
          <text x="71" y="87">{r2}</text>
          <text x="29" y="45">{l1}</text>
          <text x="29" y="87">{l2}</text>
        </g>
      </g>
    </svg>
  );
};
