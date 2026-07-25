import React from "react";
import { withIcon } from "../../hoc";

const DragHandle = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 7.5) scale(1.5)">
        <path d="M16 0H0V2H16V0ZM0 6H16V4H0V6Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default DragHandle;
