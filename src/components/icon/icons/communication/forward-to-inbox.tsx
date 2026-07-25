import React from "react";
import { withIcon } from "../../hoc";

const ForwardToInbox = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 1.1429) scale(1.1429)">
        <path
          d="M18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H11V14H2V4L10 9L18 4V9H20V2C20 0.9 19.1 0 18 0ZM10 7L2 2H18L10 7ZM17 11L21 15L17 19V16H13V14H17V11Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default ForwardToInbox;
