import React from "react";
import { withIcon } from "../../hoc";

const LocalSee = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 1.2) scale(1.2)">
        <path
          d="M18 2H14.83L13 0H7L5.17 2H2C0.9 2 0 2.9 0 4V16C0 17.1 0.9 18 2 18H18C19.1 18 20 17.1 20 16V4C20 2.9 19.1 2 18 2ZM18 16H2V4H6.05L6.64 3.35L7.88 2H12.12L13.36 3.35L13.95 4H18V16ZM10 5C7.24 5 5 7.24 5 10C5 12.76 7.24 15 10 15C12.76 15 15 12.76 15 10C15 7.24 12.76 5 10 5ZM10 13.2C8.23 13.2 6.8 11.77 6.8 10C6.8 8.23 8.23 6.8 10 6.8C11.77 6.8 13.2 8.23 13.2 10C13.2 11.77 11.77 13.2 10 13.2Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default LocalSee;
