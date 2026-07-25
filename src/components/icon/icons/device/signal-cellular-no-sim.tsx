import React from "react";
import { withIcon } from "../../hoc";

const SignalCellularNoSim = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0.4526, 0) scale(1.2232)">
        <path
          d="M8.45 2H14.62V11.11L16.62 13.11V2C16.62 0.9 15.72 0 14.62 0H7.62L5.56 2.06L6.98 3.48L8.45 2ZM18.88 18.21L1.41 0.74L0 2.15L2.62 4.77V16C2.62 17.11 3.52 18 4.62 18H15.85L17.47 19.62L18.88 18.21ZM4.62 16V6.79L13.85 16H4.62Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default SignalCellularNoSim;
