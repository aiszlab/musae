import React from "react";
import { withIcon } from "../../hoc";

const ShieldMoon = withIcon(({ size }) => {
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
          d="M8 0L0 3V9.09C0 14.14 3.41 18.85 8 20C12.59 18.85 16 14.14 16 9.09V3L8 0ZM14 9.09C14 13.09 11.45 16.79 8 17.92C4.55 16.79 2 13.1 2 9.09V4.39L8 2.14L14 4.39V9.09Z"
          fill="currentColor"
        />
        <path
          d="M5.01 12.33C6.76 14.5 10.13 14.57 11.97 12.4C12.2 12.13 12.05 11.72 11.71 11.66C10.42 11.45 9.23 10.68 8.53 9.46C7.82 8.24 7.75 6.83 8.21 5.6C8.33 5.27 8.05 4.94 7.7 5C4.36 5.62 2.81 9.61 5.01 12.33Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default ShieldMoon;
