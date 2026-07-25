import React from "react";
import { withIcon } from "../../hoc";

const SdStorage = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(2.4, 0) scale(1.2)">
        <path
          d="M14 2V18H2V6.83L6.83 2H14ZM14 0H6L0 6V18C0 19.1 0.9 20 2 20H14C15.1 20 16 19.1 16 18V2C16 0.9 15.1 0 14 0ZM5 5H7V9H5V5ZM8 5H10V9H8V5ZM11 5H13V9H11V5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default SdStorage;
