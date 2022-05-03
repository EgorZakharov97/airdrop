// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Ellipse1721Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1175 1330"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g filter={"url(#hbbSY6w5rEa)"}>
        <path
          d={
            "M875 743c0 158.506-128.718 287-287.5 287S300 901.506 300 743s222.718-443 381.5-443S875 584.494 875 743z"
          }
          fill={"currentColor"}
        ></path>
      </g>

      <defs>
        <filter
          id={"hbbSY6w5rEa"}
          x={"0"}
          y={"0"}
          width={"1175"}
          height={"1330"}
          filterUnits={"userSpaceOnUse"}
          colorInterpolationFilters={"sRGB"}
        >
          <feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>

          <feBlend
            in={"SourceGraphic"}
            in2={"BackgroundImageFix"}
            result={"shape"}
          ></feBlend>

          <feGaussianBlur
            stdDeviation={"150"}
            result={"effect1_foregroundBlur_3199_53"}
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
}

export default Ellipse1721Icon;
/* prettier-ignore-end */
