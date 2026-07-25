import React from "react";
import { withIcon } from "../../hoc";

const WineBar = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(4, 0) scale(1.3333)">
        <path
          d="M0 0V6C0 8.97 2.16 11.43 5 11.91V16H2V18H10V16H7V11.91C9.84 11.43 12 8.97 12 6V0H0ZM6 10C4.14 10 2.59 8.72 2.14 7H9.86C9.41 8.72 7.86 10 6 10ZM10 5H2V2H10V5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default WineBar;
