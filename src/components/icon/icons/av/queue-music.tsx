import React from "react";
import { withIcon } from "../../hoc";

const QueueMusic = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 3.1579) scale(1.2632)">
        <path
          d="M19 0H14V8.18C13.69 8.07 13.35 8 13 8C11.34 8 10 9.34 10 11C10 12.66 11.34 14 13 14C14.66 14 16 12.66 16 11V2H19V0ZM12 0H0V2H12V0ZM12 4H0V6H12V4ZM8 8H0V10H8V8Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default QueueMusic;
