import React from "react";
import { withIcon } from "../../hoc";

const SignalWifiStatusbar4Bar = withIcon(({ size }) => {
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
          d="M12 0C7.31 0 3.07 1.9 0 4.98L12 17L24 4.98C20.93 1.9 16.69 0 12 0Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default SignalWifiStatusbar4Bar;
