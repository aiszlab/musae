import React from "react";
import { withIcon } from "../../hoc";

const TurnRight = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.7143)">
        <path
          d="M10.17 5L8.58 6.59L10 8L14 4L10 0L8.59 1.41L10.17 3H2C0.9 3 0 3.9 0 5V14H2V5H10.17Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default TurnRight;
