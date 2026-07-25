import React from "react";
import { withIcon } from "../../hoc";

const Dvr = withIcon(({ size }) => {
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
          d="M20 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H7V18H15V16H20C21.1 16 22 15.1 22 14V2C22 0.9 21.1 0 20 0ZM20 14H2V2H20V14ZM18 5H7V7H18V5ZM18 9H7V11H18V9ZM6 5H4V7H6V5ZM6 9H4V11H6V9Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Dvr;
