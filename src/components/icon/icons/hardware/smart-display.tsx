import React from "react";
import { withIcon } from "../../hoc";

const SmartDisplay = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 2.4) scale(1.2)">
        <path d="M7.5 3.5V12.5L14.5 8L7.5 3.5Z" fill="currentColor" />
        <path
          d="M18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 14.01H2V1.99H18V14.01Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default SmartDisplay;
