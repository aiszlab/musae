import React from "react";
import { withIcon } from "../../hoc";

const SignalCellularNodata = withIcon(({ size }) => {
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
          d="M20 11H11V20H0L20 0V11ZM19 13.41L17.59 12L15.5 14.09L13.41 12L12 13.41L14.09 15.5L12 17.59L13.41 19L15.5 16.92L17.59 19L19 17.59L16.92 15.5L19 13.41Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default SignalCellularNodata;
