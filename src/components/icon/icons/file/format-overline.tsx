import React from "react";
import { withIcon } from "../../hoc";

const FormatOverline = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(2.6667, 0) scale(1.3333)">
        <path
          d="M14 0V2H0V0H14ZM7 4C3.13 4 0 7.13 0 11C0 14.87 3.13 18 7 18C10.87 18 14 14.87 14 11C14 7.13 10.87 4 7 4ZM7 15.5C4.51 15.5 2.5 13.49 2.5 11C2.5 8.51 4.51 6.5 7 6.5C9.49 6.5 11.5 8.51 11.5 11C11.5 13.49 9.49 15.5 7 15.5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default FormatOverline;
