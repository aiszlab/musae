import React from "react";
import { withIcon } from "../../hoc";

const MicOff = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0.5426, 0) scale(1.2618)">
        <path
          d="M7.8 2.9C7.8 2.24 8.34 1.7 9 1.7C9.66 1.7 10.2 2.24 10.2 2.9L10.19 6.81L12 8.6V3C12 1.34 10.66 0 9 0C7.46 0 6.21 1.16 6.04 2.65L7.8 4.41V2.9ZM16 9H14.3C14.3 9.58 14.2 10.13 14.03 10.64L15.3 11.91C15.74 11.03 16 10.04 16 9ZM1.41 0.86L0 2.27L6 8.27V9C6 10.66 7.34 12 9 12C9.23 12 9.44 11.97 9.65 11.92L11.31 13.58C10.6 13.91 9.81 14.1 9 14.1C6.24 14.1 3.7 12 3.7 9H2C2 12.41 4.72 15.23 8 15.72V19H10V15.72C10.91 15.59 11.77 15.27 12.55 14.82L16.75 19.02L18.16 17.61L1.41 0.86Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default MicOff;
