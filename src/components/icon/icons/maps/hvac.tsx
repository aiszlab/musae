import React from "react";
import { withIcon } from "../../hoc";

const Hvac = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.3333)">
        <path
          d="M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM16 16H2V2H16V16Z"
          fill="currentColor"
        />
        <path
          d="M9 15C12.31 15 15 12.31 15 9C15 5.69 12.31 3 9 3C5.69 3 3 5.69 3 9C3 12.31 5.69 15 9 15ZM12.44 7C12.7 7.45 12.88 7.96 12.95 8.5H5.05C5.12 7.96 5.29 7.45 5.56 7H12.44ZM12.95 9.5C12.88 10.04 12.71 10.55 12.44 11H5.56C5.3 10.55 5.12 10.04 5.05 9.5H12.95ZM6.38 12H11.62C10.92 12.61 10.01 13 9 13C7.99 13 7.09 12.61 6.38 12ZM11.62 6H6.38C7.08 5.39 7.99 5 9 5C10.01 5 10.91 5.39 11.62 6Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Hvac;
