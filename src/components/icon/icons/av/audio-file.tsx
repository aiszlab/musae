import React from "react";
import { withIcon } from "../../hoc";

const AudioFile = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(2.4, 0) scale(1.2)">
        <path
          d="M10 0H2C0.9 0 0 0.9 0 2V18C0 19.1 0.9 20 2 20H14C15.1 20 16 19.1 16 18V6L10 0ZM2 18V2H9V7H14V18H2ZM12 9H8V12.88C7.64 12.64 7.21 12.5 6.75 12.5C5.51 12.5 4.5 13.51 4.5 14.75C4.5 15.99 5.51 17 6.75 17C7.99 17 9 15.99 9 14.75V11H12V9Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default AudioFile;
