import React from "react";
import { withIcon } from "../../hoc";

const IconMarkUnreadChatAlt = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M20 17H4V5H14.1C14.02 4.61 13.92 3.89 14.1 3H4C2.9 3 2 3.9 2 5V23L6 19H20C21.1 19 22 18.1 22 17V7.98C21.42 8.42 20.74 8.75 20 8.9V17Z"
        fill="currentColor"
      />
      <path
        d="M19 7C20.6569 7 22 5.65685 22 4C22 2.34315 20.6569 1 19 1C17.3431 1 16 2.34315 16 4C16 5.65685 17.3431 7 19 7Z"
        fill="currentColor"
      />
      <path d="M14 13H6V15H14V13Z" fill="currentColor" />
      <path d="M18 10H6V12H18V10Z" fill="currentColor" />
      <path d="M6 9H18V8.9C16.79 8.65 15.75 7.95 15.03 7H6V9Z" fill="currentColor" />
    </svg>
  );
});

export default IconMarkUnreadChatAlt;
