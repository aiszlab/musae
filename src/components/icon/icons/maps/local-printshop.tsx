import React from "react";
import { withIcon } from "../../hoc";

const LocalPrintshop = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 1.2) scale(1.2)">
        <path
          d="M17 5H16V0H4V5H3C1.34 5 0 6.34 0 8V14H4V18H16V14H20V8C20 6.34 18.66 5 17 5ZM6 2H14V5H6V2ZM14 16H6V12H14V16ZM16 12V10H4V12H2V8C2 7.45 2.45 7 3 7H17C17.55 7 18 7.45 18 8V12H16Z"
          fill="currentColor"
        />
        <path
          d="M16 9.5C16.5523 9.5 17 9.05228 17 8.5C17 7.94772 16.5523 7.5 16 7.5C15.4477 7.5 15 7.94772 15 8.5C15 9.05228 15.4477 9.5 16 9.5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default LocalPrintshop;
