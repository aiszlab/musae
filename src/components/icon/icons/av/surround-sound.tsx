import React from "react";
import { withIcon } from "../../hoc";

const SurroundSound = withIcon(({ size }) => {
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
          d="M18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 14H2V2H18V14Z"
          fill="currentColor"
        />
        <path
          d="M6.29 11.71C5.27 10.69 4.75 9.35 4.75 8C4.75 6.65 5.27 5.31 6.28 4.28L5.05 3.05C3.68 4.41 3 6.21 3 8C3 9.79 3.68 11.59 5.06 12.94L6.29 11.71Z"
          fill="currentColor"
        />
        <path
          d="M10 11.5C11.93 11.5 13.5 9.93 13.5 8C13.5 6.07 11.93 4.5 10 4.5C8.07 4.5 6.5 6.07 6.5 8C6.5 9.93 8.07 11.5 10 11.5ZM10 6.5C10.83 6.5 11.5 7.17 11.5 8C11.5 8.83 10.83 9.5 10 9.5C9.17 9.5 8.5 8.83 8.5 8C8.5 7.17 9.17 6.5 10 6.5Z"
          fill="currentColor"
        />
        <path
          d="M13.72 11.72L14.95 12.95C16.32 11.59 17 9.79 17 8C17 6.21 16.32 4.41 14.94 3.06L13.71 4.29C14.73 5.31 15.25 6.65 15.25 8C15.25 9.35 14.73 10.69 13.72 11.72Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default SurroundSound;
