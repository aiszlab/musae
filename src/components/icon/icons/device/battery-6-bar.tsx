import React from "react";
import { withIcon } from "../../hoc";

const Battery6Bar = withIcon(({ size }) => {
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
          d="M10 3V19C10 19.55 9.55 20 9 20H1C0.45 20 0 19.55 0 19V3C0 2.45 0.45 2 1 2H3V0H7V2H9C9.55 2 10 2.45 10 3ZM8 4H2V6H8V4Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Battery6Bar;
