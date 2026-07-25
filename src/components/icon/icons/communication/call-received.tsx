import React from "react";
import { withIcon } from "../../hoc";

const CallReceived = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.6)">
        <path d="M15 1.41L13.59 0L2 11.59V5H0V15H10V13H3.41L15 1.41Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default CallReceived;
