import React from "react";
import { withIcon } from "../../hoc";

const NoSim = withIcon(({ size }) => {
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
          d="M18.88 18.21L1.41 0.74L0 2.15L2.74 4.89L2.62 5.01V16C2.62 17.1 3.52 18 4.62 18H14.62C14.97 18 15.3 17.9 15.59 17.74L17.47 19.62L18.88 18.21ZM4.62 16V6.77L13.85 16H4.62ZM8.46 2H14.62V11.11L16.62 13.11V2C16.62 0.9 15.72 0 14.62 0H7.63L5.57 2.06L6.98 3.47L8.46 2Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default NoSim;
