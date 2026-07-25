import React from "react";
import { withIcon } from "../../hoc";

const GridGoldenratio = withIcon(({ size }) => {
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
          d="M20 9V7H13V0H11V7H9V0H7V7H0V9H7V11H0V13H7V20H9V13H11V20H13V13H20V11H13V9H20ZM11 11H9V9H11V11Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default GridGoldenratio;
