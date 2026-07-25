import React from "react";
import { withIcon } from "../../hoc";

const TwentyOneMp = withIcon(({ size }) => {
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
          d="M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM16 16H2V2H16V16Z"
          fill="currentColor"
        />
        <path d="M11.5 8.5H13V2.5H10V4H11.5V8.5Z" fill="currentColor" />
        <path
          d="M9 7H6V6H8C8.55 6 9 5.55 9 5V3.5C9 2.95 8.55 2.5 8 2.5H4.5V4H7.5V5H5.5C4.95 5 4.5 5.45 4.5 6V8.5H9V7Z"
          fill="currentColor"
        />
        <path
          d="M4.5 11H5.5V14H7V11H8V15.5H9.5V10.5C9.5 9.95 9.05 9.5 8.5 9.5H4C3.45 9.5 3 9.95 3 10.5V15.5H4.5V11Z"
          fill="currentColor"
        />
        <path
          d="M12 14H14C14.55 14 15 13.55 15 13V10.5C15 9.95 14.55 9.5 14 9.5H10.5V15.5H12V14ZM12 11H13.5V12.5H12V11Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default TwentyOneMp;
