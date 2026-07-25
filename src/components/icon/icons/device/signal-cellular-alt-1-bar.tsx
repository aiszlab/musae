import React from "react";
import { withIcon } from "../../hoc";

const SignalCellularAlt1Bar = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(6, 0) scale(4)">
        <path d="M0 0H3V6H0V0Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default SignalCellularAlt1Bar;
