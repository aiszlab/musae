import React from "react";
import { withIcon } from "../../hoc";

const LegendToggle = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 1.5) scale(1.5)">
        <path
          d="M16 10H0V8H16V10ZM16 12H0V14H16V12ZM11 6L16 2.45V0L11 3.55L6 0L0 3.66V6L5.92 2.39L11 6Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default LegendToggle;
