import React from "react";
import { withIcon } from "../../hoc";

const DeviceThermostat = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(6, 0) scale(1.2)">
        <path
          d="M8 11V3C8 1.34 6.66 0 5 0C3.34 0 2 1.34 2 3V11C0.79 11.91 0 13.37 0 15C0 17.76 2.24 20 5 20C7.76 20 10 17.76 10 15C10 13.37 9.21 11.91 8 11ZM4 9V3C4 2.45 4.45 2 5 2C5.55 2 6 2.45 6 3V4H5V5H6V7H5V8H6V9H4Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default DeviceThermostat;
