import React from "react";
import { withIcon } from "../../hoc";

const Superscript = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0.785) scale(1.4019)">
        <path
          d="M16.12 3H14.12V4H17.12V5H13.12V3C13.12 2.45 13.57 2 14.12 2H16.12V1H13.12V0H16.12C16.67 0 17.12 0.45 17.12 1V2C17.12 2.55 16.67 3 16.12 3ZM0 16H2.66L6.06 10.58H6.18L9.58 16H12.24L7.59 8.73L11.93 2H9.25L6.18 6.99H6.06L2.97 2H0.31L4.63 8.73L0 16Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Superscript;
