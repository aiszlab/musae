import React from "react";
import { withIcon } from "../../hoc";

const AddChart = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.3333)">
        <path
          d="M16 16H2V2H11V0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V7H16V16Z"
          fill="currentColor"
        />
        <path d="M14 10H12V14H14V10Z" fill="currentColor" />
        <path d="M6 7H4V14H6V7Z" fill="currentColor" />
        <path d="M10 4H8V14H10V4Z" fill="currentColor" />
        <path d="M16 2V0H14V2H12V4H14V6H16V4H18V2H16Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default AddChart;
