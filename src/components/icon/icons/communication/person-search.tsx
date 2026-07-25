import React from "react";
import { withIcon } from "../../hoc";

const PersonSearch = withIcon(({ size }) => {
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
          d="M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 2C9.1 2 10 2.9 10 4C10 5.1 9.1 6 8 6C6.9 6 6 5.1 6 4C6 2.9 6.9 2 8 2Z"
          fill="currentColor"
        />
        <path
          d="M2 14C2.22 13.28 5.31 12 8 12C8 11.3 8.13 10.63 8.35 10.01C5.62 9.91 0 11.27 0 14V16H9.54C9.02 15.42 8.61 14.75 8.35 14H2Z"
          fill="currentColor"
        />
        <path
          d="M17.43 14.02C17.79 13.43 18 12.74 18 12C18 9.79 16.21 8 14 8C11.79 8 10 9.79 10 12C10 14.21 11.79 16 14 16C14.74 16 15.43 15.78 16.02 15.43C16.95 16.36 17.64 17.05 18.59 18L20 16.59C18.5 15.09 19.21 15.79 17.43 14.02ZM14 14C12.9 14 12 13.1 12 12C12 10.9 12.9 10 14 10C15.1 10 16 10.9 16 12C16 13.1 15.1 14 14 14Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default PersonSearch;
