import React from "react";
import { withIcon } from "../../hoc";

const MicExternalOff = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0.0619, 0) scale(1.1257)">
        <path
          d="M9.31 3C9.31 1.34 7.97 0 6.31 0C5.69 0 5.12 0.19 4.64 0.5L8.79 4.65C9.11 4.18 9.31 3.61 9.31 3Z"
          fill="currentColor"
        />
        <path
          d="M13.31 4C13.31 2.9 14.21 2 15.31 2C16.41 2 17.31 2.9 17.31 4V13.17L19.31 15.17V4C19.31 1.79 17.52 0 15.31 0C13.1 0 11.31 1.79 11.31 4V7.17L13.31 9.17V4Z"
          fill="currentColor"
        />
        <path
          d="M1.41 0.0999999L0 1.51L4.48 6H3.31L4.31 16H5.31C5.31 18.21 7.1 20 9.31 20C11.52 20 13.31 18.21 13.31 16V14.83L19.8 21.32L21.21 19.91L1.41 0.0999999ZM6.5 14H6.12L5.52 8H6.48L7.04 8.56L6.5 14ZM11.31 16C11.31 17.1 10.41 18 9.31 18C8.21 18 7.31 17.1 7.31 16H8.31L8.87 10.39L11.31 12.83V16Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default MicExternalOff;
