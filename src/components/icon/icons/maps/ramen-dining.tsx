import React from "react";
import { withIcon } from "../../hoc";

const RamenDining = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.2)">
        <path
          d="M17.66 12C17 13.92 15.42 15.54 13.26 16.39L12 16.89V18H8V16.89L6.73 16.39C4.57 15.54 2.99 13.92 2.33 12H17.66ZM20 0L2 1.99V10H0C0 13.69 2.47 16.86 6 18.25V20H14V18.25C17.53 16.86 20 13.69 20 10H8.5V6H20V4.5H8.5V2.78L20 1.51V0ZM6 4.5V3.06L7 2.95V4.5H6ZM3.5 4.5V3.34L4.5 3.23V4.5H3.5ZM6 10V6H7V10H6ZM3.5 10V6H4.5V10H3.5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default RamenDining;
