import React from "react";
import { withIcon } from "../../hoc";

const LinkedCamera = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.2)">
        <path
          d="M18 7V18H2V6H6.05L7.88 4H13V2H7L5.17 4H2C0.9 4 0 4.9 0 6V18C0 19.1 0.9 20 2 20H18C19.1 20 20 19.1 20 18V7H18ZM18.67 5.99H20C19.99 2.68 17.31 0 14 0V1.33C16.58 1.33 18.66 3.41 18.67 5.99ZM16 5.99H17.33C17.32 4.15 15.84 2.67 14 2.67V4C15.11 4 15.99 4.89 16 5.99ZM5 12C5 14.76 7.24 17 10 17C12.76 17 15 14.76 15 12C15 9.24 12.76 7 10 7C7.24 7 5 9.24 5 12ZM13 12C13 13.65 11.65 15 10 15C8.35 15 7 13.65 7 12C7 10.35 8.35 9 10 9C11.65 9 13 10.34 13 12Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default LinkedCamera;
