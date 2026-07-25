import React from "react";
import { withIcon } from "../../hoc";

const SignalWifi4Bar = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 2.4639) scale(1.0309)">
        <path
          d="M11.65 18.49L23.28 4C22.83 3.66 18.35 0 11.64 0C4.92 0 0.45 3.66 0 4L11.63 18.49L11.64 18.5L11.65 18.49Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default SignalWifi4Bar;
