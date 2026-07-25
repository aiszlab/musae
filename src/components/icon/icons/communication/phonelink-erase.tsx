import React from "react";
import { withIcon } from "../../hoc";

const PhonelinkErase = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(2.1818, 0) scale(1.0909)">
        <path
          d="M10 7.2L9 6.2L5 10.2L1 6.2L0 7.2L4 11.2L0 15.2L1 16.2L5 12.2L9 16.2L10 15.2L6 11.2L10 7.2ZM16 0H6C4.9 0 4 0.9 4 2V5H6V3H16V19H6V17H4V20C4 21.1 4.9 22 6 22H16C17.1 22 18 21.1 18 20V2C18 0.9 17.1 0 16 0Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default PhonelinkErase;
