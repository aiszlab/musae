import React from "react";
import { withIcon } from "../../hoc";

const SwitchVideo = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 3.6) scale(1.2)">
        <path
          d="M6 8H10V10L13 7L10 4V6H6V4L3 7L6 10V8ZM16 4.5V1C16 0.45 15.55 0 15 0H1C0.45 0 0 0.45 0 1V13C0 13.55 0.45 14 1 14H15C15.55 14 16 13.55 16 13V9.5L20 13.5V0.5L16 4.5ZM14 12H2V2H14V12Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default SwitchVideo;
