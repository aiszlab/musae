import React from "react";
import { withIcon } from "../../hoc";

const StoreMallDirectory = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 1.3333) scale(1.3333)">
        <path
          d="M15.36 5L15.96 8H2.04L2.64 5H15.36ZM17 0H1V2H17V0ZM17 3H1L0 8V10H1V16H11V10H15V16H17V10H18V8L17 3ZM3 14V10H9V14H3Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default StoreMallDirectory;
