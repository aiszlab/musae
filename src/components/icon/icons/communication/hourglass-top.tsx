import React from "react";
import { withIcon } from "../../hoc";

const IconHourglassTop = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M6 2L6.01 8L10 12L6.01 16.01L6 22H18V16L14 12L18 8.01V2H6ZM16 16.5V20H8V16.5L12 12.5L16 16.5Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconHourglassTop;
