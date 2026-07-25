import React from "react";
import { withIcon } from "../../hoc";

const Timer3Select = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 2.1176) scale(1.4118)">
        <path
          d="M17 6V8H13V9H15.5C16.33 9 17 9.68 17 10.5V12.5C17 13.33 16.33 14 15.5 14H11V12H15V11H12.5C11.68 11 11 10.32 11 9.5V7.5C11 6.68 11.68 6 12.5 6H17ZM0 0V3H6V5.5H0V8.5H6V11H0V14H6C7.66 14 9 12.66 9 11V9.1C9 7.94 8.06 7 6.9 7C8.06 7 9 6.06 9 4.9V3C9 1.34 7.66 0 6 0H0Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Timer3Select;
