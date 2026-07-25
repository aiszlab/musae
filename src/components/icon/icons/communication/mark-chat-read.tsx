import React from "react";
import { withIcon } from "../../hoc";

const MarkChatRead = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0.5714) scale(1.1429)">
        <path
          d="M10 16H4L0 20V2C0 0.9 0.9 0 2 0H18C19.1 0 20 0.9 20 2V9H18V2H2V14H10V16ZM21 12.34L19.59 10.93L15.35 15.17L13.23 13.05L11.82 14.46L15.34 18L21 12.34Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default MarkChatRead;
