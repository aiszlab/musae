import React from "react";
import { withIcon } from "../../hoc";

const AirplanemodeInactive = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.1645)">
        <path
          d="M9.11 5.67V1.5C9.11 0.67 9.78 0 10.61 0C11.44 0 12.11 0.67 12.11 1.5V7L20.61 12V14L16.12 12.68L9.11 5.67ZM18.39 20.61L19.8 19.2L1.42 0.81L0 2.22L6.38 8.6L0.61 12V14L9.11 11.5V17L6.61 18.5V20L10.61 19L14.61 20V18.5L12.11 17V14.33L18.39 20.61Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default AirplanemodeInactive;
