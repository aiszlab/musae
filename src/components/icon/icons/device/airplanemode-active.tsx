import React from "react";
import { withIcon } from "../../hoc";

const AirplanemodeActive = withIcon(({ size }) => {
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
          d="M20 14V12L11.5 7V1.5C11.5 0.67 10.83 0 10 0C9.17 0 8.5 0.67 8.5 1.5V7L0 12V14L8.5 11.5V17L6 18.5V20L10 19L14 20V18.5L11.5 17V11.5L20 14Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default AirplanemodeActive;
