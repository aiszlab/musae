import React from "react";
import { withIcon } from "../../hoc";

const Campaign = withIcon(({ size }) => {
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
          d="M16 7C16 7.67 16 8.33 16 9C17.2 9 18.76 9 20 9C20 8.33 20 7.67 20 7C18.76 7 17.2 7 16 7Z"
          fill="currentColor"
        />
        <path
          d="M14 13.61C14.96 14.32 16.21 15.26 17.2 16C17.6 15.47 18 14.93 18.4 14.4C17.41 13.66 16.16 12.72 15.2 12C14.8 12.54 14.4 13.08 14 13.61Z"
          fill="currentColor"
        />
        <path
          d="M18.4 1.6C18 1.07 17.6 0.53 17.2 0C16.21 0.74 14.96 1.68 14 2.4C14.4 2.93 14.8 3.47 15.2 4C16.16 3.28 17.41 2.35 18.4 1.6Z"
          fill="currentColor"
        />
        <path
          d="M2 5C0.9 5 0 5.9 0 7V9C0 10.1 0.9 11 2 11H3V15H5V11H6L11 14V2L6 5H2ZM7.03 6.71L9 5.53V10.47L7.03 9.29L6.55 9H2V7H6.55L7.03 6.71Z"
          fill="currentColor"
        />
        <path
          d="M13.5 8C13.5 6.67 12.92 5.47 12 4.65V11.34C12.92 10.53 13.5 9.33 13.5 8Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Campaign;
