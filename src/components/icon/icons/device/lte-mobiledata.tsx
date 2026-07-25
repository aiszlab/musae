import React from "react";
import { withIcon } from "../../hoc";

const LteMobiledata = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 6.3529) scale(1.4118)">
        <path
          d="M2 6H5V8H0V0H2V6ZM5 2H7V8H9V2H11V0H5V2ZM17 2V0H12V8H17V6H14V5H17V3H14V2H17Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default LteMobiledata;
