import React from "react";
import { withIcon } from "../../hoc";

const LastPage = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0.3965) scale(1.9339)">
        <path
          d="M0 1.41L4.59 6L0 10.59L1.41 12L7.41 6L1.41 0L0 1.41ZM10.41 0H12.41V12H10.41V0Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default LastPage;
