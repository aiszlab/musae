import React from "react";
import { withIcon } from "../../hoc";

const CallMissedOutgoing = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 5.06) scale(1.3333)">
        <path
          d="M0 1.41L9 10.41L16 3.41V8H18V0H10V2H14.59L9 7.59L1.41 0L0 1.41Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default CallMissedOutgoing;
