import React from "react";
import { withIcon } from "../../hoc";

const WebStories = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0.2927) scale(1.1707)">
        <path d="M15 2V18C16.1 18 17 17.1 17 16V4C17 2.9 16.1 2 15 2Z" fill="currentColor" />
        <path
          d="M11 0H2C0.9 0 0 0.9 0 2V18C0 19.1 0.9 20 2 20H11C12.1 20 13 19.1 13 18V2C13 0.9 12.1 0 11 0ZM11 18H2V2H11V18Z"
          fill="currentColor"
        />
        <path
          d="M19 4V16C19.83 16 20.5 15.33 20.5 14.5V5.5C20.5 4.67 19.83 4 19 4Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default WebStories;
