import React from "react";
import { withIcon } from "../../hoc";

const Crop75 = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 2.6667) scale(1.3333)">
        <path
          d="M16 0H2C0.9 0 0 0.9 0 2V12C0 13.1 0.9 14 2 14H16C17.1 14 18 13.1 18 12V2C18 0.9 17.1 0 16 0ZM16 12H2V2H16V12Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Crop75;
