import React from "react";
import { withIcon } from "../../hoc";

const AlignVerticalBottom = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.2)">
        <path d="M20 20H0V18H20V20ZM8 0H5V16H8V0ZM15 6H12V16H15V6Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default AlignVerticalBottom;
