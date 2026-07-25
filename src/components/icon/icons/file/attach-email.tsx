import React from "react";
import { withIcon } from "../../hoc";

const AttachEmail = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 1.0909) scale(1.0909)">
        <path
          d="M2 4L10 9L18 4V7H20V2C20 0.9 19.1 0 18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H12V14H2V4ZM18 2L10 7L2 2H18Z"
          fill="currentColor"
        />
        <path
          d="M20 12V16C20 17.1 19.1 18 18 18C16.9 18 16 17.1 16 16V11.5C16 11.22 16.22 11 16.5 11C16.78 11 17 11.22 17 11.5V16H19V11.5C19 10.12 17.88 9 16.5 9C15.12 9 14 10.12 14 11.5V16C14 18.21 15.79 20 18 20C20.21 20 22 18.21 22 16V12H20Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default AttachEmail;
