import React from "react";
import { withIcon } from "../../hoc";

const FolderZip = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 2.4) scale(1.2)">
        <path
          d="M18 2H10L8 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V4C20 2.9 19.1 2 18 2ZM14 12H16V10H14V8H16V6H14V4H18V14H14V12ZM14 12H12V14H2V2H7.17L9.17 4H12V6H14V8H12V10H14V12Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default FolderZip;
