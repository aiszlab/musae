import React from "react";
import { withIcon } from "../../hoc";

const Forum = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.2)">
        <path
          d="M13 2V9H3.17L2 10.17V2H13ZM14 0H1C0.45 0 0 0.45 0 1V15L4 11H14C14.55 11 15 10.55 15 10V1C15 0.45 14.55 0 14 0ZM19 4H17V13H4V15C4 15.55 4.45 16 5 16H16L20 20V5C20 4.45 19.55 4 19 4Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Forum;
