import React from "react";
import { withIcon } from "../../hoc";

const Sd = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 2.4) scale(1.2)">
        <path
          d="M5 11H8C8.55 11 9 10.55 9 10V8.5C9 7.95 8.55 7.5 8 7.5H5.5V6.5H7.5V7H9V6C9 5.45 8.55 5 8 5H5C4.45 5 4 5.45 4 6V7.5C4 8.05 4.45 8.5 5 8.5H7.5V9.5H5.5V9H4V10C4 10.55 4.45 11 5 11Z"
          fill="currentColor"
        />
        <path
          d="M16 10V6C16 5.45 15.55 5 15 5H11V11H15C15.55 11 16 10.55 16 10ZM14.5 9.5H12.5V6.5H14.5V9.5Z"
          fill="currentColor"
        />
        <path
          d="M18 0H2C0.89 0 0 0.9 0 2V14C0 15.1 0.89 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 14H2V2H18V14Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Sd;
