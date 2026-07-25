import React from "react";
import { withIcon } from "../../hoc";

const NetworkCell = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.2)">
        <path d="M0 20H20V0L0 20ZM18 18H15V7.83L18 4.83V18Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default NetworkCell;
