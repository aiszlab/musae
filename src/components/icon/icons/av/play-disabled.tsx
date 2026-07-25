import React from "react";
import { withIcon } from "../../hoc";

const PlayDisabled = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(-0, -0) scale(1.2127)">
        <path d="M15.06 10.81L17.61 9.19L6.61 2.19V2.36L15.06 10.81Z" fill="currentColor" />
        <path
          d="M1.42 0L0 1.41L6.61 8.02V16.19L11.6 13.01L18.38 19.79L19.79 18.38L1.42 0ZM8.61 12.55V10.02L10.16 11.57L8.61 12.55Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default PlayDisabled;
