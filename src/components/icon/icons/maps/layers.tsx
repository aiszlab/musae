import React from "react";
import { withIcon } from "../../hoc";

const Layers = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0.6733, 0) scale(1.2585)">
        <path
          d="M8.99 16.54L1.62 10.81L0 12.07L9 19.07L18 12.07L16.37 10.8L8.99 16.54ZM9 14L16.36 8.27L18 7L9 0L0 7L1.63 8.27L9 14ZM9 2.53L14.74 7L9 11.47L3.26 7L9 2.53Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Layers;
