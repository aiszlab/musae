import React from "react";
import { withIcon } from "../../hoc";

const InsertPageBreak = withIcon(({ size }) => {
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
          d="M17 18H5V15H3V18C3 19.1 3.9 20 5 20H17C18.1 20 19 19.1 19 18V15H17V18Z"
          fill="currentColor"
        />
        <path d="M5 2H12V7H17V9H19V6L13 0H5C3.9 0 3 0.9 3 2V9H5V2Z" fill="currentColor" />
        <path d="M14 11H8V13H14V11Z" fill="currentColor" />
        <path d="M22 11H16V13H22V11Z" fill="currentColor" />
        <path d="M6 11H0V13H6V11Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default InsertPageBreak;
