import React from "react";
import { withIcon } from "../../hoc";

const FileOpen = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0.595, 0) scale(1.1782)">
        <path
          d="M11 20H2C0.9 20 0 19.1 0 18V2C0 0.9 0.9 0 2 0H10L16 6V12H14V7H9V2H2V18H11V20ZM15 19.66V17.42L17.95 20.37L19.36 18.96L16.41 16H18.65V14H13V19.66H15Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default FileOpen;
