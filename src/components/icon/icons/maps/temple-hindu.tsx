import React from "react";
import { withIcon } from "../../hoc";

const TempleHindu = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0.5714, 0) scale(1.1429)">
        <path
          d="M18 10V12H16L13 2V0H11V2H8.97V0H6.97V2.12L4 12H2V10H0V21H9V16H11V21H20V10H18ZM13.31 10H6.69L7.29 8H12.71L13.31 10ZM12.11 6H7.89L8.49 4H11.51L12.11 6ZM18 19H13V14H7V19H2V14H5.49L6.09 12H13.91L14.51 14H18V19Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default TempleHindu;
