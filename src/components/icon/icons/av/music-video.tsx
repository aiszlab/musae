import React from "react";
import { withIcon } from "../../hoc";

const MusicVideo = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 2.1818) scale(1.0909)">
        <path
          d="M20 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H20C21.1 18 22 17.1 22 16V2C22 0.9 21.1 0 20 0ZM20 16H2V2H20V16ZM7 12C7 10.34 8.34 9 10 9C10.35 9 10.69 9.07 11 9.18V3H16V5H13V12.03C12.98 13.67 11.65 15 10 15C8.34 15 7 13.66 7 12Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default MusicVideo;
