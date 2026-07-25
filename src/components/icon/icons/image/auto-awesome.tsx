import React from "react";
import { withIcon } from "../../hoc";

const AutoAwesome = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.0909)">
        <path
          d="M18 8L19.25 5.25L22 4L19.25 2.75L18 0L16.75 2.75L14 4L16.75 5.25L18 8Z"
          fill="currentColor"
        />
        <path
          d="M18 14L16.75 16.75L14 18L16.75 19.25L18 22L19.25 19.25L22 18L19.25 16.75L18 14Z"
          fill="currentColor"
        />
        <path
          d="M10.5 8.5L8 3L5.5 8.5L0 11L5.5 13.5L8 19L10.5 13.5L16 11L10.5 8.5ZM8.99 11.99L8 14.17L7.01 11.99L4.83 11L7.01 10.01L8 7.83L8.99 10.01L11.17 11L8.99 11.99Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default AutoAwesome;
