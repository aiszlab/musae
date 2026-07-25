import React from "react";
import { withIcon } from "../../hoc";

const SignalCellularConnectedNoInternet4Bar = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.2)">
        <path d="M18 16H20V8H18V16ZM18 20H20V18H18V20ZM0 20H16V6H20V0L0 20Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default SignalCellularConnectedNoInternet4Bar;
