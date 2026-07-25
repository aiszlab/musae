import React from "react";
import { withIcon } from "../../hoc";

const SwitchLeft = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 2.6667) scale(1.3333)">
        <path
          d="M5.5 3.62V10.38L2.12 7L5.5 3.62ZM7 0L0 7L7 14V0ZM11 0V14L18 7L11 0Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default SwitchLeft;
