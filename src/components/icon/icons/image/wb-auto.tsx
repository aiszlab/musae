import React from "react";
import { withIcon } from "../../hoc";

const WbAuto = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 3.9328) scale(1.0084)">
        <path
          d="M7 3L3.8 12H5.7L6.4 10H9.6L10.3 12H12.2L9 3H7ZM6.85 8.65L8 5L9.15 8.65H6.85ZM22 3L20.8 9.29L19.3 3H17.7L16.21 9.29L15 3H14.24L14.23 3.01C12.76 1.18 10.53 0 8 0C3.58 0 0 3.58 0 8C0 12.42 3.58 16 8 16C10.96 16 13.55 14.39 14.93 12C14.96 11.94 14.98 11.88 15.01 11.82C15.06 11.74 15.1 11.65 15.15 11.57L15.25 12H17L18.5 5.9L20 12H21.75L23.8 3H22ZM13.37 10.67C12.38 12.64 10.35 14 8 14C4.69 14 2 11.31 2 8C2 4.69 4.69 2 8 2C11.31 2 14 4.69 14 8C14 8.96 13.77 9.86 13.37 10.67Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default WbAuto;
