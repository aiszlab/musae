import React from "react";
import { withIcon } from "../../hoc";

const LocalMall = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(1.7143, 0) scale(1.1429)">
        <path
          d="M16 5H14C14 2.24 11.76 0 9 0C6.24 0 4 2.24 4 5H2C0.9 5 0 5.9 0 7V19C0 20.1 0.9 21 2 21H16C17.1 21 18 20.1 18 19V7C18 5.9 17.1 5 16 5ZM9 2C10.66 2 12 3.34 12 5H6C6 3.34 7.34 2 9 2ZM16 19H2V7H16V19ZM9 11C7.34 11 6 9.66 6 8H4C4 10.76 6.24 13 9 13C11.76 13 14 10.76 14 8H12C12 9.66 10.66 11 9 11Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default LocalMall;
