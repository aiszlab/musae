import React from "react";
import { withIcon } from "../../hoc";

const IconEqualizer = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M10 20H14V4H10V20ZM4 20H8V12H4V20ZM16 9V20H20V9H16Z" fill="currentColor" />
    </svg>
  );
});

export default IconEqualizer;
