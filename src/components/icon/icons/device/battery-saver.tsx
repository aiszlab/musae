import React from "react";
import { withIcon } from "../../hoc";

const BatterySaver = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(6, 0) scale(1.2)">
        <path
          d="M9 2H7V0H3V2H1C0.45 2 0 2.45 0 3V19C0 19.55 0.45 20 1 20H9C9.55 20 10 19.55 10 19V3C10 2.45 9.55 2 9 2ZM8 12H6V14H4V12H2V10H4V8H6V10H8V12Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default BatterySaver;
