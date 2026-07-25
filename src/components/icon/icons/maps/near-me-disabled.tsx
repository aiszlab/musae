import React from "react";
import { withIcon } from "../../hoc";

const NearMeDisabled = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.2127)">
        <path
          d="M9.19 4.94L18.19 1.6L14.85 10.6L13.29 9.04L14.79 4.99L10.74 6.49L9.19 4.94ZM18.38 19.79L13.31 14.72L11.5 19.6H10.09L7.26 12.53L0.19 9.7V8.29L5.07 6.48L0 1.41L1.41 0L19.79 18.38L18.38 19.79ZM11.76 13.17L6.62 8.03L3.91 9.04L8.8 10.99L10.75 15.88L11.76 13.17Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default NearMeDisabled;
