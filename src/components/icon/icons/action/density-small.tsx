import React from "react";
import { withIcon } from "../../hoc";

const DensitySmall = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M21 2H3V4H21V2Z" fill="currentColor" />
      <path d="M21 20H3V22H21V20Z" fill="currentColor" />
      <path d="M21 14H3V16H21V14Z" fill="currentColor" />
      <path d="M21 8H3V10H21V8Z" fill="currentColor" />
    </svg>
  );
});

export default DensitySmall;
