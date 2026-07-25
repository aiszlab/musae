import React from "react";
import { withIcon } from "../../hoc";

const FormatListBulleted = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 2.2703) scale(1.2973)">
        <path
          d="M1.5 6C0.67 6 0 6.67 0 7.5C0 8.33 0.67 9 1.5 9C2.33 9 3 8.33 3 7.5C3 6.67 2.33 6 1.5 6ZM1.5 0C0.67 0 0 0.67 0 1.5C0 2.33 0.67 3 1.5 3C2.33 3 3 2.33 3 1.5C3 0.67 2.33 0 1.5 0ZM1.5 12C0.67 12 0 12.68 0 13.5C0 14.32 0.68 15 1.5 15C2.32 15 3 14.32 3 13.5C3 12.68 2.33 12 1.5 12ZM4.5 14.5H18.5V12.5H4.5V14.5ZM4.5 8.5H18.5V6.5H4.5V8.5ZM4.5 0.5V2.5H18.5V0.5H4.5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default FormatListBulleted;
