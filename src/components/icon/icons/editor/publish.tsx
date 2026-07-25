import React from "react";
import { withIcon } from "../../hoc";

const Publish = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(1.5, 0) scale(1.5)">
        <path
          d="M0 0H14V2H0V0ZM0 10H4V16H10V10H14L7 3L0 10ZM8 8V14H6V8H4.83L7 5.83L9.17 8H8Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Publish;
