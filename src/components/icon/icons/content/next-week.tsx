import React from "react";
import { withIcon } from "../../hoc";

const NextWeek = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0.6) scale(1.2)">
        <path
          d="M9 15.5L13 11.5L9 7.5L8 8.5L11 11.5L8 14.5L9 15.5ZM18 4H14V2C14 1.45 13.78 0.95 13.41 0.59C13.05 0.22 12.55 0 12 0H8C6.9 0 6 0.9 6 2V4H2C0.9 4 0 4.9 0 6V17C0 18.1 0.9 19 2 19H18C19.1 19 20 18.1 20 17V6C20 4.9 19.1 4 18 4ZM8 2H12V4H8V2ZM18 17H2V6H18V17Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default NextWeek;
