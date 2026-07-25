import React from "react";
import { withIcon } from "../../hoc";

const ShuffleOn = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.0909)">
        <path
          d="M20 0H2C0.9 0 0 0.9 0 2V20C0 21.1 0.9 22 2 22H20C21.1 22 22 21.1 22 20V2C22 0.9 21.1 0 20 0ZM4.41 3L9.59 8.17L8.18 9.59L3 4.42L4.41 3ZM19 19H13V17H15.61L12.41 13.8L13.83 12.38L17 15.55V13H19V19ZM19 9H17V6.42L4.41 19L3 17.59L15.58 5H13V3H19V9Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default ShuffleOn;
