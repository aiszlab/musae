import React from "react";
import { withIcon } from "../../hoc";

const Sip = withIcon(({ size }) => {
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
          d="M2 0H18C19.1 0 20 0.9 20 2V14C20 15.1 19.1 16 18 16H2C0.9 16 0 15.1 0 14V2C0 0.9 0.9 0 2 0ZM2 2V14H18V2H2ZM9 5H11V11H9V5ZM12 5H16C16.55 5 17 5.45 17 6V8C17 8.55 16.55 9 16 9H13.5V11H12V5ZM15.5 6.5H13.5V7.5H15.5V6.5ZM4.5 7.25H7C7.55 7.25 8 7.7 8 8.25V10C8 10.55 7.55 11 7 11H3V9.5H6.5V8.75H4C3.45 8.75 3 8.3 3 7.75V6C3 5.45 3.45 5 4 5H8V6.5H4.5V7.25Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Sip;
