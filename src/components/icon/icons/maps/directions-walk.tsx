import React from "react";
import { withIcon } from "../../hoc";

const DirectionsWalk = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(4.7442, 0) scale(1.1163)">
        <path
          d="M7.5 4C8.6 4 9.5 3.1 9.5 2C9.5 0.9 8.6 0 7.5 0C6.4 0 5.5 0.9 5.5 2C5.5 3.1 6.4 4 7.5 4ZM3.8 7.4L1 21.5H3.1L4.9 13.5L7 15.5V21.5H9V14L6.9 12L7.5 9C8.8 10.5 10.8 11.5 13 11.5V9.5C11.1 9.5 9.5 8.5 8.7 7.1L7.7 5.5C7.14 4.61 6.02 4.25 5.05 4.66L0 6.8V11.5H2V8.1L3.8 7.4Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default DirectionsWalk;
