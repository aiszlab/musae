import React from "react";
import { withIcon } from "../../hoc";

const SignalCellularNull = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.2)">
        <path d="M18 4.83V18H4.83L18 4.83ZM20 0L0 20H20V0Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default SignalCellularNull;
