import React from "react";
import { withIcon } from "../../hoc";

const MusicNote = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(4, 0) scale(1.3333)">
        <path
          d="M6 0L6.01 10.55C5.42 10.21 4.74 10 4.01 10C1.79 10 0 11.79 0 14C0 16.21 1.79 18 4.01 18C6.23 18 8 16.21 8 14V4H12V0H6ZM4.01 16C2.91 16 2.01 15.1 2.01 14C2.01 12.9 2.91 12 4.01 12C5.11 12 6.01 12.9 6.01 14C6.01 15.1 5.11 16 4.01 16Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default MusicNote;
