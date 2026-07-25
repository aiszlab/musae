import React from "react";
import { withIcon } from "../../hoc";

const TurnSlightRight = withIcon(({ size }) => {
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
          d="M3.34 0H9V5.66H7V3.41L2 8.41V16H0V8.42C0 7.89 0.21 7.38 0.59 7.01L5.59 2.01H3.34V0Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default TurnSlightRight;
