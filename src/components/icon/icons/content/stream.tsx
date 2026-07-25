import React from "react";
import { withIcon } from "../../hoc";

const Stream = withIcon(({ size }) => {
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
          d="M18 12C19.1046 12 20 11.1046 20 10C20 8.89543 19.1046 8 18 8C16.8954 8 16 8.89543 16 10C16 11.1046 16.8954 12 18 12Z"
          fill="currentColor"
        />
        <path
          d="M2 12C3.10457 12 4 11.1046 4 10C4 8.89543 3.10457 8 2 8C0.89543 8 0 8.89543 0 10C0 11.1046 0.89543 12 2 12Z"
          fill="currentColor"
        />
        <path
          d="M10 20C11.1046 20 12 19.1046 12 18C12 16.8954 11.1046 16 10 16C8.89543 16 8 16.8954 8 18C8 19.1046 8.89543 20 10 20Z"
          fill="currentColor"
        />
        <path
          d="M16.3475 2.2271L11.9431 6.61904L13.3553 8.03524L17.7597 3.6433L16.3475 2.2271Z"
          fill="currentColor"
        />
        <path
          d="M6.32 7.68L6.63 8L8.05 6.59L4.03 2.55H4.02L3.71 2.23L2.29 3.64L6.31 7.69L6.32 7.68Z"
          fill="currentColor"
        />
        <path
          d="M13.41 11.94L12 13.35L15.99 17.36L16.34 17.71L17.76 16.3L13.77 12.29L13.41 11.94Z"
          fill="currentColor"
        />
        <path
          d="M6.59 11.95L2.56 15.96L2.24 16.29L3.65 17.7L7.68 13.68L8.01 13.36L6.59 11.95Z"
          fill="currentColor"
        />
        <path
          d="M10 4C11.1046 4 12 3.10457 12 2C12 0.89543 11.1046 0 10 0C8.89543 0 8 0.89543 8 2C8 3.10457 8.89543 4 10 4Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Stream;
