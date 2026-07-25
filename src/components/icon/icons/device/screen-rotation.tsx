import React from "react";
import { withIcon } from "../../hoc";

const ScreenRotation = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0.05, 0) scale(1)">
        <path
          d="M16.43 2.52C19.7 4.07 22.04 7.24 22.4 11H23.9C23.39 4.84 18.24 0 11.95 0L11.29 0.03L15.1 3.84L16.43 2.52ZM10.18 1.75C9.59 1.16 8.64 1.16 8.06 1.75L1.7 8.11C1.11 8.7 1.11 9.65 1.7 10.23L13.72 22.25C14.31 22.84 15.26 22.84 15.84 22.25L22.2 15.89C22.79 15.3 22.79 14.35 22.2 13.77L10.18 1.75ZM14.78 21.19L2.76 9.17L9.12 2.81L21.14 14.83L14.78 21.19ZM7.47 21.48C4.2 19.94 1.86 16.76 1.5 13H0C0.51 19.16 5.66 24 11.95 24L12.61 23.97L8.8 20.16L7.47 21.48Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default ScreenRotation;
