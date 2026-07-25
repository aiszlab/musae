import React from "react";
import { withIcon } from "../../hoc";

const FlipCameraIos = withIcon(({ size }) => {
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
          d="M18 2H14.83L13 0H7L5.17 2H2C0.9 2 0 2.9 0 4V16C0 17.1 0.9 18 2 18H18C19.1 18 20 17.1 20 16V4C20 2.9 19.1 2 18 2ZM18 16H2V4H6.05L6.64 3.35L7.88 2H12.12L13.36 3.35L13.95 4H18V16Z"
          fill="currentColor"
        />
        <path
          d="M10 14C7.79 14 6 12.21 6 10H8L5.5 7.5L3 10H5C5 12.76 7.24 15 10 15C10.86 15 11.65 14.76 12.36 14.38L11.62 13.64C11.13 13.87 10.58 14 10 14Z"
          fill="currentColor"
        />
        <path
          d="M10 5C9.14 5 8.35 5.24 7.64 5.62L8.38 6.35C8.87 6.13 9.42 6 10 6C12.21 6 14 7.79 14 10H12L14.5 12.5L17 10H15C15 7.24 12.76 5 10 5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default FlipCameraIos;
