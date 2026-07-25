import React from "react";
import { withIcon } from "../../hoc";

const MapsUgc = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.1429)">
        <path
          d="M11 2C15.41 2 19 5.59 19 10C19 14.41 15.41 18 11 18C9.82 18 8.66 17.74 7.57 17.22C7.3 17.09 7.01 17.03 6.71 17.03C6.52 17.03 6.33 17.06 6.15 17.11L2.95 18.05L3.89 14.85C4.03 14.38 3.99 13.87 3.78 13.43C3.26 12.34 3 11.18 3 10C3 5.59 6.59 2 11 2ZM11 0C5.48 0 1 4.48 1 10C1 11.54 1.36 12.98 1.97 14.29L0 21L6.71 19.03C8.02 19.64 9.46 20 11 20C16.52 20 21 15.52 21 10C21 4.48 16.52 0 11 0Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 6H10V9H7V11H10V14H12V11H15V9H12V6Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default MapsUgc;
