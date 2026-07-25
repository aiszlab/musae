import React from "react";
import { withIcon } from "../../hoc";

const Send = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 1.7143) scale(1.1429)">
        <path
          d="M2.01 3.03L9.52 6.25L2 5.25L2.01 3.03ZM9.51 11.75L2 14.97V12.75L9.51 11.75ZM0.00999999 0L0 7L15 9L0 11L0.00999999 18L21 9L0.00999999 0Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Send;
