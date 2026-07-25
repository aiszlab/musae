import React from "react";
import { withIcon } from "../../hoc";

const Dataset = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.3333)">
        <path d="M8 10H4V14H8V10Z" fill="currentColor" />
        <path d="M14 10H10V14H14V10Z" fill="currentColor" />
        <path
          d="M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM16 16H2V2H16V16Z"
          fill="currentColor"
        />
        <path d="M8 4H4V8H8V4Z" fill="currentColor" />
        <path d="M14 4H10V8H14V4Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default Dataset;
