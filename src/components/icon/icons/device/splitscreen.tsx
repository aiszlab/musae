import React from "react";
import { withIcon } from "../../hoc";

const Splitscreen = withIcon(({ size }) => {
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
          d="M14 2V7H2V2H14ZM14 0H2C0.9 0 0 0.9 0 2V7C0 8.1 0.9 9 2 9H14C15.1 9 16 8.1 16 7V2C16 0.9 15.1 0 14 0ZM14 13V18H2V13H14ZM14 11H2C0.9 11 0 11.9 0 13V18C0 19.1 0.9 20 2 20H14C15.1 20 16 19.1 16 18V13C16 11.9 15.1 11 14 11Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Splitscreen;
