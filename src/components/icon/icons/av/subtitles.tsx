import React from "react";
import { withIcon } from "../../hoc";

const Subtitles = withIcon(({ size }) => {
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
          d="M18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 14H2V2H18V14ZM4 6H6V8H4V6ZM4 10H12V12H4V10ZM14 10H16V12H14V10ZM8 6H16V8H8V6Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Subtitles;
