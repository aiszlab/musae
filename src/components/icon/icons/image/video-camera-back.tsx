import React from "react";
import { withIcon } from "../../hoc";

const VideoCameraBack = withIcon(({ size }) => {
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
          d="M16 6.48V2C16 0.9 15.1 0 14 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H14C15.1 16 16 15.1 16 14V9.52L20 13.5V2.5L16 6.48ZM14 14H2V2H14V14ZM9.62 7.5L7 11L5.38 8.83L3 12H13L9.62 7.5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default VideoCameraBack;
