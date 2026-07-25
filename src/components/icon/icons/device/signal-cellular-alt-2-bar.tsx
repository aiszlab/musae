import React from "react";
import { withIcon } from "../../hoc";

const SignalCellularAlt2Bar = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(2.1818, 0) scale(2.1818)">
        <path d="M0 5H3V11H0V5ZM6 0H9V11H6V0Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default SignalCellularAlt2Bar;
