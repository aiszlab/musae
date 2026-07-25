import React from "react";
import { withIcon } from "../../hoc";

const CallMissed = withIcon(({ size }) => {
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
          d="M16.59 0L9 7.59L3.41 2H8V0H0V8H2V3.41L9 10.41L18 1.41L16.59 0Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default CallMissed;
