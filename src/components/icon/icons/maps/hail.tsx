import React from "react";
import { withIcon } from "../../hoc";

const Hail = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(3, 0) scale(1.2)">
        <path
          d="M8 4C6.9 4 6 3.1 6 2C6 0.9 6.9 0 8 0C9.1 0 10 0.9 10 2C10 3.1 9.1 4 8 4ZM13 0H15C15 2.7 14.07 4.41 12.7 5.5C12.2 5.9 11.6 6.2 11 6.4V20H9V14H7V20H5V8.1C4.7 8.2 4.5 8.3 4.4 8.4C3.87 8.81 3 9.43 3 12H1C1 9.94 1.35 8.22 3.11 6.71C4.21 5.81 6 5 8 5C10 5 10.68 4.54 11.48 3.94C11.96 3.55 13 2.76 13 0ZM0 14H3V20H0V14Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Hail;
