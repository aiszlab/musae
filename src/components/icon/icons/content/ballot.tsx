import React from "react";
import { withIcon } from "../../hoc";

const Ballot = withIcon(({ size }) => {
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
          d="M10 4.5H15V6.5H10V4.5ZM10 11.5H15V13.5H10V11.5ZM16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM16 16H2V2H16V16ZM8 3H3V8H8V3ZM7 7H4V4H7V7ZM8 10H3V15H8V10ZM7 14H4V11H7V14Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Ballot;
