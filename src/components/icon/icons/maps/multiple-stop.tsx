import React from "react";
import { withIcon } from "../../hoc";

const MultipleStop = withIcon(({ size }) => {
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
          d="M14 0L18 4L14 8V5H10V3H14V0ZM7 3C6.45 3 6 3.45 6 4C6 4.55 6.45 5 7 5C7.55 5 8 4.55 8 4C8 3.45 7.55 3 7 3ZM3 3C2.45 3 2 3.45 2 4C2 4.55 2.45 5 3 5C3.55 5 4 4.55 4 4C4 3.45 3.55 3 3 3ZM4 13H8V11H4V8L0 12L4 16V13ZM11 13C11.55 13 12 12.55 12 12C12 11.45 11.55 11 11 11C10.45 11 10 11.45 10 12C10 12.55 10.45 13 11 13ZM15 13C15.55 13 16 12.55 16 12C16 11.45 15.55 11 15 11C14.45 11 14 11.45 14 12C14 12.55 14.45 13 15 13Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default MultipleStop;
