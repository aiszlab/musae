import React from "react";
import { withIcon } from "../../hoc";

const LibraryMusic = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.2)">
        <path
          d="M18 0H6C4.9 0 4 0.9 4 2V14C4 15.1 4.9 16 6 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 14H6V2H18V14ZM10.5 13C11.88 13 13 11.88 13 10.5V5H16V3H12V8.51C11.58 8.19 11.07 8 10.5 8C9.12 8 8 9.12 8 10.5C8 11.88 9.12 13 10.5 13ZM2 4H0V18C0 19.1 0.9 20 2 20H16V18H2V4Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default LibraryMusic;
