import React from "react";
import { withIcon } from "../../hoc";

const MarkUnreadChatAlt = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(1.0909, 0) scale(1.0909)">
        <path
          d="M18 16H2V4H12.1C12.02 3.61 11.92 2.89 12.1 2H2C0.9 2 0 2.9 0 4V22L4 18H18C19.1 18 20 17.1 20 16V6.98C19.42 7.42 18.74 7.75 18 7.9V16Z"
          fill="currentColor"
        />
        <path
          d="M17 6C18.6569 6 20 4.65685 20 3C20 1.34315 18.6569 0 17 0C15.3431 0 14 1.34315 14 3C14 4.65685 15.3431 6 17 6Z"
          fill="currentColor"
        />
        <path d="M12 12H4V14H12V12Z" fill="currentColor" />
        <path d="M16 9H4V11H16V9Z" fill="currentColor" />
        <path d="M4 8H16V7.9C14.79 7.65 13.75 6.95 13.03 6H4V8Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default MarkUnreadChatAlt;
