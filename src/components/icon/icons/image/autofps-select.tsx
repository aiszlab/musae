import React from "react";
import { withIcon } from "../../hoc";

const AutofpsSelect = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0.6316, 0) scale(1.2632)">
        <path d="M9.03 3.3H8.97L7.95 6.19H10.05L9.03 3.3Z" fill="currentColor" />
        <path d="M2 14H0V19H2V14Z" fill="currentColor" />
        <path
          d="M9 12C12.31 12 15 9.31 15 6C15 2.69 12.31 0 9 0C5.69 0 3 2.69 3 6C3 9.31 5.69 12 9 12ZM8.37 2H9.62L12.25 9H11.04L10.41 7.21H7.58L6.96 9H5.74L8.37 2Z"
          fill="currentColor"
        />
        <path d="M6 14H4V19H6V14Z" fill="currentColor" />
        <path d="M10 14H8V19H10V14Z" fill="currentColor" />
        <path d="M18 14H12V19H18V14Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default AutofpsSelect;
