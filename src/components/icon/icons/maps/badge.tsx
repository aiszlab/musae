import React from "react";
import { withIcon } from "../../hoc";

const Badge = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.2)">
        <path d="M16 10H12V11.5H16V10Z" fill="currentColor" />
        <path d="M16 13H12V14.5H16V13Z" fill="currentColor" />
        <path
          d="M18 5H13V2C13 0.9 12.1 0 11 0H9C7.9 0 7 0.9 7 2V5H2C0.9 5 0 5.9 0 7V18C0 19.1 0.9 20 2 20H18C19.1 20 20 19.1 20 18V7C20 5.9 19.1 5 18 5ZM9 2H11V7H9V2ZM18 18H2V7H7C7 8.1 7.9 9 9 9H11C12.1 9 13 8.1 13 7H18V18Z"
          fill="currentColor"
        />
        <path
          d="M7 13C7.82843 13 8.5 12.3284 8.5 11.5C8.5 10.6716 7.82843 10 7 10C6.17157 10 5.5 10.6716 5.5 11.5C5.5 12.3284 6.17157 13 7 13Z"
          fill="currentColor"
        />
        <path
          d="M9.08 14.18C8.44 13.9 7.74 13.75 7 13.75C6.26 13.75 5.56 13.9 4.92 14.18C4.36 14.42 4 14.96 4 15.57V16H10V15.57C10 14.96 9.64 14.42 9.08 14.18Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Badge;
