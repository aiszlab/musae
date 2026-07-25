import React from "react";
import { withIcon } from "../../hoc";

const Euro = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0.6316) scale(1.2632)">
        <path
          d="M13 15.5C10.49 15.5 8.32 14.08 7.24 12H13L14 10H6.58C6.53 9.67 6.5 9.34 6.5 9C6.5 8.66 6.53 8.33 6.58 8H13L14 6H7.24C8.32 3.92 10.5 2.5 13 2.5C14.61 2.5 16.09 3.09 17.23 4.07L19 2.3C17.41 0.87 15.3 0 13 0C9.08 0 5.76 2.51 4.52 6H1L0 8H4.06C4.02 8.33 4 8.66 4 9C4 9.34 4.02 9.67 4.06 10H1L0 12H4.52C5.76 15.49 9.08 18 13 18C15.31 18 17.41 17.13 19 15.7L17.22 13.93C16.09 14.91 14.62 15.5 13 15.5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Euro;
