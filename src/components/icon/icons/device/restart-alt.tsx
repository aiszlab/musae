import React from "react";
import { withIcon } from "../../hoc";

const RestartAlt = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(1.5822, 0) scale(1.3022)">
        <path
          d="M2 10.5C2 8.85 2.67 7.35 3.76 6.26L2.34 4.84C0.9 6.29 0 8.29 0 10.5C0 14.58 3.05 17.94 7 18.43V16.41C4.17 15.93 2 13.47 2 10.5ZM16 10.5C16 6.08 12.42 2.5 8 2.5C7.94 2.5 7.88 2.51 7.82 2.51L8.91 1.42L7.5 0L4 3.5L7.5 7L8.91 5.59L7.83 4.51C7.89 4.51 7.95 4.5 8 4.5C11.31 4.5 14 7.19 14 10.5C14 13.47 11.83 15.93 9 16.41V18.43C12.95 17.94 16 14.58 16 10.5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default RestartAlt;
