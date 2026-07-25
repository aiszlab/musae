import React from "react";
import { withIcon } from "../../hoc";

const MovieCreation = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 2.4) scale(1.2)">
        <path
          d="M3.76 6H18V14H2V2.47M20 0H16L18 4H15L13 0H11L13 4H10L8 0H6L8 4H5L3 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V0Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default MovieCreation;
