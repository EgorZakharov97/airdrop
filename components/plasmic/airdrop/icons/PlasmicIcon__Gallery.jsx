// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function GalleryIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
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

      <path
        d={
          "M2.58 19.01l-.02.02c-.27-.59-.44-1.26-.51-2 .07.73.26 1.39.53 1.98zM9 10.38a2.38 2.38 0 100-4.76 2.38 2.38 0 000 4.76z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.38c0 1.09.19 2.04.56 2.84.86 1.9 2.7 2.97 5.25 2.97h8.38c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zm4.18 10.5c-.78-.67-2.04-.67-2.82 0l-4.16 3.57c-.78.67-2.04.67-2.82 0l-.34-.28c-.71-.62-1.84-.68-2.64-.14l-3.74 2.51c-.22-.56-.35-1.21-.35-1.97V7.81c0-2.82 1.49-4.31 4.31-4.31h8.38c2.82 0 4.31 1.49 4.31 4.31v4.8l-.13-.11z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default GalleryIcon;
/* prettier-ignore-end */
