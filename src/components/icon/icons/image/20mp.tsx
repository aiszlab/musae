import React from "react";
import { withIcon } from "../../hoc";

const TwentyMp = withIcon(({ size }) => {
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
          d="M10.5 9.5V15.5H12V14H14C14.55 14 15 13.55 15 13V10.5C15 9.95 14.55 9.5 14 9.5H10.5ZM13.5 12.5H12V11H13.5V12.5Z"
          fill="currentColor"
        />
        <path
          d="M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM16 16H2V2H16V16Z"
          fill="currentColor"
        />
        <path
          d="M11 8.5H13.5C14.05 8.5 14.5 8.05 14.5 7.5V3.5C14.5 2.95 14.05 2.5 13.5 2.5H11C10.45 2.5 10 2.95 10 3.5V7.5C10 8.05 10.45 8.5 11 8.5ZM11.5 4H13V7H11.5V4Z"
          fill="currentColor"
        />
        <path
          d="M8 7H5V6H7C7.55 6 8 5.55 8 5V3.5C8 2.95 7.55 2.5 7 2.5H3.5V4H6.5V5H4.5C3.95 5 3.5 5.45 3.5 6V8.5H8V7Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default TwentyMp;
