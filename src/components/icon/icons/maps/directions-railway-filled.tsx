import React from "react";
import { withIcon } from "../../hoc";

const DirectionsRailwayFilled = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(1.8947, 0) scale(1.2632)">
        <path
          d="M8 0C4 0 0 0.5 0 4V13.5C0 15.43 1.57 17 3.5 17L2 18V19H14V18L12.5 17C14.43 17 16 15.43 16 13.5V4C16 0.5 12.42 0 8 0ZM8 2C11.71 2 13.13 2.46 13.67 3H2.43C3.03 2.48 4.48 2 8 2ZM14 13.5C14 14.33 13.33 15 12.5 15H3.5C2.67 15 2 14.33 2 13.5V10H14V13.5ZM14 8H2V5H14V8Z"
          fill="currentColor"
        />
        <path
          d="M8 14C8.82843 14 9.5 13.3284 9.5 12.5C9.5 11.6716 8.82843 11 8 11C7.17157 11 6.5 11.6716 6.5 12.5C6.5 13.3284 7.17157 14 8 14Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default DirectionsRailwayFilled;
