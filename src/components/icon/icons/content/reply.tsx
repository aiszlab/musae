import React from "react";
import { withIcon } from "../../hoc";

const Reply = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 2) scale(1.3333)">
        <path d="M7 4V0L0 7L7 14V9.9C12 9.9 15.5 11.5 18 15C17 10 14 5 7 4Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default Reply;
