import React from "react";
import { withIcon } from "../../hoc";

const EnergySavingsLeaf = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.3333)">
        <path
          d="M9 0C4.2 0 0 3.86 0 9C0 11.12 0.74 13.07 1.97 14.61L0 16.59L1.41 18L3.38 16.03C4.93 17.26 6.88 18 9 18C11.3 18 13.61 17.12 15.36 15.36C17.12 13.61 18 11.3 18 9V0H9ZM16 9C16 10.87 15.27 12.63 13.95 13.95C12.63 15.27 10.87 16 9 16C5.14 16 2 12.86 2 9C2 7.1 2.74 5.32 4.1 4.01C5.42 2.71 7.16 2 9 2H16V9Z"
          fill="currentColor"
        />
        <path
          d="M5.46 9.63L9.51 10.03L7.07 13.36C6.96 13.52 6.97 13.74 7.11 13.88C7.26 14.03 7.51 14.04 7.67 13.89L12.83 9.26C13.16 8.96 12.98 8.41 12.53 8.37L8.48 7.97L10.92 4.64C11.03 4.48 11.02 4.26 10.88 4.12C10.73 3.97 10.48 3.96 10.32 4.11L5.16 8.74C4.84 9.04 5.02 9.59 5.46 9.63Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default EnergySavingsLeaf;
