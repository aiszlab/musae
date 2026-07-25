import React from "react";
import { withIcon } from "../../hoc";

const Inventory = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0.3, 0) scale(1.2)">
        <path
          d="M2 4H4V7H14V4H16V9H18V4C18 2.9 17.1 2 16 2H11.82C11.4 0.84 10.3 0 9 0C7.7 0 6.6 0.84 6.18 2H2C0.9 2 0 2.9 0 4V18C0 19.1 0.9 20 2 20H8V18H2V4ZM9 2C9.55 2 10 2.45 10 3C10 3.55 9.55 4 9 4C8.45 4 8 3.55 8 3C8 2.45 8.45 2 9 2Z"
          fill="currentColor"
        />
        <path d="M18 10.5L12.51 16L9.5 13L8 14.5L12.51 19L19.5 12L18 10.5Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default Inventory;
