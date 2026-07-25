import React from "react";
import { withIcon } from "../../hoc";

const AssistantDirection = withIcon(({ size }) => {
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
          d="M11 0C4.9 0 0 4.9 0 11C0 17.1 4.9 22 11 22C17.1 22 22 17.1 22 11C22 4.9 17.1 0 11 0ZM11 20C6.01 20 2 15.99 2 11C2 6.01 6.01 2 11 2C15.99 2 20 6.01 20 11C20 15.99 15.99 20 11 20Z"
          fill="currentColor"
        />
        <path
          d="M18.73 10.42L11.54 3.2C11.18 2.93 10.74 2.93 10.39 3.2L3.2 10.42C2.93 10.78 2.93 11.22 3.2 11.58L10.39 18.8C10.75 19.07 11.19 19.07 11.54 18.8L18.73 11.58C19.09 11.22 19.09 10.69 18.73 10.42ZM12.5 13.5L11.09 12.09L12.17 11H9V14H7V10C7 9.4 7.4 9 8 9H12.17L11.08 7.91L12.5 6.5L16 10L12.5 13.5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default AssistantDirection;
