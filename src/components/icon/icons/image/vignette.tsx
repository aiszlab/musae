import React from "react";
import { withIcon } from "../../hoc";

const Vignette = withIcon(({ size }) => {
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
          d="M20 2V16H2V2H20ZM20 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H20C21.1 18 22 17.1 22 16V2C22 0.9 21.1 0 20 0ZM11 5C14.25 5 17 6.83 17 9C17 11.17 14.25 13 11 13C7.75 13 5 11.17 5 9C5 6.83 7.75 5 11 5ZM11 3C6.58 3 3 5.69 3 9C3 12.31 6.58 15 11 15C15.42 15 19 12.31 19 9C19 5.69 15.42 3 11 3Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Vignette;
