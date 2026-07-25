import React from "react";
import { withIcon } from "../../hoc";

const Propane = withIcon(({ size }) => {
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
          d="M16 3H15V2C15 0.9 14.1 0 13 0H9C7.9 0 7 0.9 7 2V3H6C2.69 3 0 5.69 0 9C0 12.31 2.69 15 6 15V18H8V15H14V18H16V15C19.31 15 22 12.31 22 9C22 5.69 19.31 3 16 3ZM9 2H13V3H9V2ZM16 13H6C3.79 13 2 11.21 2 9C2 6.79 3.79 5 6 5H16C18.21 5 20 6.79 20 9C20 11.21 18.21 13 16 13Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Propane;
