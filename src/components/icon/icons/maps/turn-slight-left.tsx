import React from "react";
import { withIcon } from "../../hoc";

const TurnSlightLeft = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(5.25, 0) scale(1.5)">
        <path
          d="M5.66 0H0V5.66H2V3.41L7 8.41V16H9V8.42C9 7.89 8.79 7.38 8.41 7.01L3.41 2.01H5.66V0Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default TurnSlightLeft;
