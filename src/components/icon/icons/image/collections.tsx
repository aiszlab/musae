import React from "react";
import { withIcon } from "../../hoc";

const Collections = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.2)">
        <path
          d="M18 2V14H6V2H18ZM18 0H6C4.9 0 4 0.9 4 2V14C4 15.1 4.9 16 6 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM9.5 9.67L11.19 11.93L13.67 8.83L17 13H7L9.5 9.67ZM0 4V18C0 19.1 0.9 20 2 20H16V18H2V4H0Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Collections;
