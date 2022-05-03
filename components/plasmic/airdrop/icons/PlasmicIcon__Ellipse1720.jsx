// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Ellipse1720Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1609 1349"}
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

      <g filter={"url(#a4vMDXgGwia)"}>
        <path
          d={
            "M1308.5 674.5c0 206.831-167.67 374.5-374.5 374.5-206.831 0-634-125.169-634-332 0-206.831 427.169-417 634-417 206.83 0 374.5 167.669 374.5 374.5z"
          }
          fill={"currentColor"}
        ></path>
      </g>

      <defs>
        <filter
          id={"a4vMDXgGwia"}
          x={"0"}
          y={"0"}
          width={"1608.5"}
          height={"1349"}
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
            result={"effect1_foregroundBlur_3199_52"}
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
}

export default Ellipse1720Icon;
/* prettier-ignore-end */
