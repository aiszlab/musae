import React from "react";
import { withIcon } from "../../hoc";

const LaptopChromebook = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 3.5) scale(1)">
        <path
          d="M22 15V0H2V15H0V17H24V15H22ZM14 15H10V14H14V15ZM20 12H4V2H20V12Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default LaptopChromebook;
