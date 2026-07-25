import React from "react";
import { withIcon } from "../../hoc";

const Airplay = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 1.6364) scale(1.0909)">
        <path d="M5 19H17L11 13L5 19Z" fill="currentColor" />
        <path
          d="M20 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H6V14H2V2H20V14H16V16H20C21.1 16 22 15.1 22 14V2C22 0.9 21.1 0 20 0Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Airplay;
