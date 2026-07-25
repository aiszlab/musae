import React from "react";
import { withIcon } from "../../hoc";

const FlashlightOn = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(4.8, 0) scale(1.2)">
        <path
          d="M12 0H0V6L2 9V20H10V9L12 6V0ZM10 2V3H2V2H10ZM8 8.4V18H4V8.39L2 5.39V5H10V5.39L8 8.4Z"
          fill="currentColor"
        />
        <path
          d="M6 13.5C6.82843 13.5 7.5 12.8284 7.5 12C7.5 11.1716 6.82843 10.5 6 10.5C5.17157 10.5 4.5 11.1716 4.5 12C4.5 12.8284 5.17157 13.5 6 13.5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default FlashlightOn;
