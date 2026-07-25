import React from "react";
import { withIcon } from "../../hoc";

const ReplyAll = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 4.5) scale(1)">
        <path
          d="M7 3V0L0 7L7 14V11L3 7L7 3ZM13 4V0L6 7L13 14V9.9C18 9.9 21.5 11.5 24 15C23 10 20 5 13 4Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default ReplyAll;
