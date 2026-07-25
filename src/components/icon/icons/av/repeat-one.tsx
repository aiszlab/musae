import React from "react";
import { withIcon } from "../../hoc";

const RepeatOne = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(1.2, 0) scale(1.2)">
        <path
          d="M4 5H14V8L18 4L14 0V3H2V9H4V5ZM14 15H4V12L0 16L4 20V17H16V11H14V15ZM10 13V7H9L7 8V9H8.5V13H10Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default RepeatOne;
