import React from "react";
import { withIcon } from "../../hoc";

const PlayLesson = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0.5714, 0) scale(1.1429)">
        <path
          d="M2 18V2H4V9L6.5 7.5L9 9V2H14V9.08C14.33 9.03 14.66 9 15 9C15.34 9 15.67 9.03 16 9.08V2C16 0.9 15.1 0 14 0H2C0.9 0 0 0.9 0 2V18C0 19.1 0.9 20 2 20H9.26C8.84 19.4 8.51 18.72 8.29 18H2ZM15 11C12.24 11 10 13.24 10 16C10 18.76 12.24 21 15 21C17.76 21 20 18.76 20 16C20 13.24 17.76 11 15 11ZM13.75 18.5V13.5L17.75 16L13.75 18.5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default PlayLesson;
