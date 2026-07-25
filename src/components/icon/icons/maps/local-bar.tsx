import React from "react";
import { withIcon } from "../../hoc";

const LocalBar = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.3333)">
        <path
          d="M11.77 6L9 9.11L6.23 6H11.77ZM18 0H0V2L8 11V16H3V18H15V16H10V11L18 2V0ZM4.43 4L2.66 2H15.35L13.57 4H4.43Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default LocalBar;
