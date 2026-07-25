import React from "react";
import { withIcon } from "../../hoc";

const Hd = withIcon(({ size }) => {
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
          d="M16 0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM16 16H2V2H16V16ZM4.5 10H6.5V12H8V6H6.5V8.5H4.5V6H3V12H4.5V10ZM15 11V7C15 6.45 14.55 6 14 6H10V12H14C14.55 12 15 11.55 15 11ZM13.5 10.5H11.5V7.5H13.5V10.5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Hd;
