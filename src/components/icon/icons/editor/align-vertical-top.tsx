import React from "react";
import { withIcon } from "../../hoc";

const AlignVerticalTop = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.2)">
        <path d="M20 0V2H0V0H20ZM5 20H8V4H5V20ZM12 14H15V4H12V14Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default AlignVerticalTop;
