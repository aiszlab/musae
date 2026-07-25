import React from "react";
import { withIcon } from "../../hoc";

const Rtt = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 1.2) scale(1.2)">
        <path
          d="M7.03 0L5.92 7.07H8.54L9.24 2.57H11.82L9.8 15.43H7.47L7.06 18H14.33L14.73 15.43H12.38L14.38 2.57H16.96L16.25 7.07H18.9L20 0H7.03ZM6 2H2L1.69 4H5.69L6 2ZM5.39 6H1.39L1.08 8H5.08L5.39 6ZM6.31 14H0.31L0 16H6L6.31 14ZM6.93 10H0.93L0.62 12H6.63L6.93 10Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Rtt;
