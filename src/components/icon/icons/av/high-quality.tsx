import React from "react";
import { withIcon } from "../../hoc";

const HighQuality = withIcon(({ size }) => {
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
          d="M16 0H2C0.89 0 0 0.9 0 2V14C0 15.1 0.89 16 2 16H16C17.1 16 18 15.1 18 14V2C18 0.9 17.1 0 16 0ZM16 14H2V2H16V14ZM4.5 9H6.5V11H8V5H6.5V7.5H4.5V5H3V11H4.5V9ZM11 11H11.75V12.5H13.25V11H14C14.55 11 15 10.55 15 10V6C15 5.45 14.55 5 14 5H11C10.45 5 10 5.45 10 6V10C10 10.55 10.45 11 11 11ZM11.5 6.5H13.5V9.5H11.5V6.5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default HighQuality;
