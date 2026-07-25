import React from "react";
import { withIcon } from "../../hoc";

const MailLock = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 3.2727) scale(1.0909)">
        <path
          d="M2 4L10 9L18 4V6H20V2C20 0.9 19.1 0 18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H14V14H2V4ZM18 2L10 7L2 2H18Z"
          fill="currentColor"
        />
        <path
          d="M21 11V10C21 8.9 20.1 8 19 8C17.9 8 17 8.9 17 10V11C16.45 11 16 11.45 16 12V15C16 15.55 16.45 16 17 16H21C21.55 16 22 15.55 22 15V12C22 11.45 21.55 11 21 11ZM18 11V10C18 9.45 18.45 9 19 9C19.55 9 20 9.45 20 10V11H18Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default MailLock;
