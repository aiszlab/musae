import React from "react";
import { withIcon } from "../../hoc";

const SignalWifiOff = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 1.5928) scale(1.0309)">
        <path
          d="M23.28 5.69C22.83 5.35 18.35 1.69 11.64 1.69C10.32 1.69 9.09 1.83 7.95 2.07L18.07 12.19L23.28 5.69ZM3.05 0L1.64 1.41L3.69 3.46C1.55 4.45 0.23 5.51 0 5.69L11.64 20.19L15.55 15.32L18.87 18.64L20.28 17.23L3.05 0Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default SignalWifiOff;
