import React from "react";
import { withIcon } from "../../hoc";

const IconAlignHorizontalCenter = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M11 2H13V7H21V10H13V14H18V17H13V22H11V17H6V14H11V10H3V7H11V2Z" fill="currentColor" />
    </svg>
  );
});

export default IconAlignHorizontalCenter;
