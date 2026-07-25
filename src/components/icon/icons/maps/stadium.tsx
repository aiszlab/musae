import React from "react";
import { withIcon } from "../../hoc";

const Stadium = withIcon(({ size }) => {
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
          d="M5 3L1 5V1L5 3ZM16 1V5L20 3L16 1ZM9 0V4L13 2L9 0ZM11 16H9V20C3.95 19.85 0 18.56 0 17V8C0 6.34 4.48 5 10 5C15.52 5 20 6.34 20 8V17C20 18.56 16.05 19.85 11 20V16ZM3 8.04C4.38 8.53 6.77 9 10 9C13.23 9 15.62 8.53 17 8.04C17 7.86 14.22 7 10 7C5.78 7 3 7.86 3 8.04ZM18 9.8C16.18 10.53 13.27 11 10 11C6.73 11 3.82 10.53 2 9.8V16.58C2.61 16.99 4.36 17.59 7 17.86V14H13V17.86C15.64 17.59 17.39 16.99 18 16.58V9.8Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Stadium;
