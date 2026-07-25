import React from "react";
import { withIcon } from "../../hoc";

const Beenhere = withIcon(({ size }) => {
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
          d="M16 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14.93C0 15.62 0.35 16.23 0.88 16.59L9 22L17.11 16.59C17.64 16.23 17.99 15.62 17.99 14.93L18 2C18 0.9 17.1 0 16 0ZM9 19.6L2 14.94V2H16V14.93L9 19.6ZM6.99 12.18L4.41 9.59L3 11L7 15L15 7L13.58 5.58L6.99 12.18Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Beenhere;
