import React from "react";
import { withIcon } from "../../hoc";

const Check = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 2.8516) scale(1.3644)">
        <path
          d="M5.59 10.58L1.42 6.41L0 7.82L5.59 13.41L17.59 1.41L16.18 0L5.59 10.58Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Check;
