import React from "react";
import { withIcon } from "../../hoc";

const Airlines = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 2.4) scale(1.2)">
        <path
          d="M15.34 14H3.8L12.05 2H17.59L15.34 14ZM11 0L0 16H17L20 0H11ZM12.5 5C11.12 5 10 6.12 10 7.5C10 8.88 11.12 10 12.5 10C13.88 10 15 8.88 15 7.5C15 6.12 13.88 5 12.5 5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Airlines;
