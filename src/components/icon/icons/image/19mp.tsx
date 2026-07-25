import React from "react";
import { withIcon } from "../../hoc";

const NineteenMp = withIcon(({ size }) => {
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
          d="M4.5 11H5.5V14H7V11H8V15.5H9.5V10.5C9.5 9.95 9.05 9.5 8.5 9.5H4C3.45 9.5 3 9.95 3 10.5V15.5H4.5V11Z"
          fill="currentColor"
        />
        <path
          d="M10.5 15.5H12V14H14C14.55 14 15 13.55 15 13V10.5C15 9.95 14.55 9.5 14 9.5H10.5V15.5ZM12 11H13.5V12.5H12V11Z"
          fill="currentColor"
        />
        <path
          d="M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM16 16H2V2H16V16Z"
          fill="currentColor"
        />
        <path d="M5.5 8.5H7V2.5H4V4H5.5V8.5Z" fill="currentColor" />
        <path
          d="M13.5 7.5V3.5C13.5 2.95 13.05 2.5 12.5 2.5H10C9.45 2.5 9 2.95 9 3.5V5C9 5.55 9.45 6 10 6H12V7H9V8.5H12.5C13.05 8.5 13.5 8.05 13.5 7.5ZM12 5H10.5V3.5H12V5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default NineteenMp;
