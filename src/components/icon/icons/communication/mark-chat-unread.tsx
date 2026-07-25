import React from "react";
import { withIcon } from "../../hoc";

const MarkChatUnread = withIcon(({ size }) => {
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
          d="M20 6.98V16C20 17.1 19.1 18 18 18H4L0 22V4C0 2.9 0.9 2 2 2H12.1C12.04 2.32 12 2.66 12 3C12 3.34 12.04 3.68 12.1 4H2V16H18V7.9C18.74 7.75 19.42 7.42 20 6.98ZM14 3C14 4.66 15.34 6 17 6C18.66 6 20 4.66 20 3C20 1.34 18.66 0 17 0C15.34 0 14 1.34 14 3Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default MarkChatUnread;
