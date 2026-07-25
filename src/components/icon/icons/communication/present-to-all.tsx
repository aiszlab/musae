import React from "react";
import { withIcon } from "../../hoc";

const PresentToAll = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 2.1818) scale(1.0909)">
        <path
          d="M20 0H2C0.89 0 0 0.89 0 2V16C0 17.11 0.89 18 2 18H20C21.11 18 22 17.11 22 16V2C22 0.89 21.11 0 20 0ZM20 16.02H2V1.98H20V16.02ZM9 9H7L11 5L15 9H13V13H9V9Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default PresentToAll;
