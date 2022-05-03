// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function LoadingIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      style={{
        margin: "auto",
        background: "rgb(255, 255, 255)",
        fill: "currentcolor",
        ...(style || {}),
      }}
      viewBox={"0 0 100 100"}
      preserveAspectRatio={"xMidYMid"}
      display={"block"}
      shapeRendering={"auto"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M42 50a8 8 0 0016 0 8 9.2 0 01-16 0"} fill={"currentColor"}>
        <animateTransform
          attributeName={"transform"}
          type={"rotate"}
          dur={"0.2645502645502646s"}
          repeatCount={"indefinite"}
          keyTimes={"0;1"}
          values={"0 50 50.6;360 50 50.6"}
        ></animateTransform>
      </path>
    </svg>
  );
}

export default LoadingIcon;
/* prettier-ignore-end */
