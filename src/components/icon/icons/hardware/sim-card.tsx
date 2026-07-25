import React from "react";
import { withIcon } from "../../hoc";

const SimCard = withIcon(({ size }) => {
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
          d="M14 0H6L0 6V18C0 19.1 0.9 20 2 20H14C15.1 20 16 19.1 16 18V2C16 0.9 15.1 0 14 0ZM14 2V18H2V6.83L6.83 2H14ZM3 15H5V17H3V15ZM11 15H13V17H11V15ZM3 9H5V13H3V9ZM7 13H9V17H7V13ZM7 9H9V11H7V9ZM11 9H13V13H11V9Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default SimCard;
