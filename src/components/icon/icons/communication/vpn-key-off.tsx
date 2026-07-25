import React from "react";
import { withIcon } from "../../hoc";

const VpnKeyOff = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 1.2) scale(1.0909)">
        <path
          d="M1.81 0L0.39 1.41L2.98 4C1.2 5.04 0 6.98 0 9.19C0 12.5 2.69 15.19 6 15.19C8.22 15.19 10.15 13.98 11.19 12.19L18.78 19.8L20.19 18.39L1.81 0ZM6 13.19C3.79 13.19 2 11.4 2 9.19C2 7.52 3.02 6.09 4.47 5.49L6.18 7.2C6.12 7.19 6.06 7.19 6 7.19C4.9 7.19 4 8.09 4 9.19C4 10.29 4.9 11.19 6 11.19C7.1 11.19 8 10.29 8 9.19C8 9.13 8 9.07 7.99 9.01L9.73 10.75C9.22 11.67 8.14 13.19 6 13.19ZM16 11.36V10.19H14.83L16 11.36ZM12.83 8.19H20V10.19H18V13.19L20 15.19V12.19H22V6.19H10.83L12.83 8.19Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default VpnKeyOff;
