import React from "react";
import { withIcon } from "../../hoc";

const Diamond = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 1.2) scale(1.2)">
        <path
          d="M17 0H3L0 6L10 18L20 6L17 0ZM7.62 5L9.12 2H10.88L12.38 5H7.62ZM9 7V13.68L3.44 7H9ZM11 7H16.56L11 13.68V7ZM17.26 5H14.61L13.11 2H15.76L17.26 5ZM4.24 2H6.89L5.39 5H2.74L4.24 2Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Diamond;
