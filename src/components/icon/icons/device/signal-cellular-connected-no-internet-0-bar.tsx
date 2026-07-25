import React from "react";
import { withIcon } from "../../hoc";

const SignalCellularConnectedNoInternet0Bar = withIcon(({ size }) => {
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
          d="M18 16H20V8H18V16ZM18 20H20V18H18V20ZM16 18V20H0L20 0V6H18V4.83L4.83 18H16Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default SignalCellularConnectedNoInternet0Bar;
