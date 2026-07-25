import React from "react";
import { withIcon } from "../../hoc";

const Speaker = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(3.6, 0) scale(1.2)">
        <path
          d="M12 0H2C0.9 0 0 0.9 0 2V18C0 19.1 0.9 19.99 2 19.99L12 20C13.1 20 14 19.1 14 18V2C14 0.9 13.1 0 12 0ZM2 18V2H12V18H2ZM7 7C8.1 7 9 6.1 9 5C9 3.9 8.1 3 7 3C5.89 3 5 3.9 5 5C5 6.1 5.89 7 7 7ZM7 9C4.79 9 3 10.79 3 13C3 15.21 4.79 17 7 17C9.21 17 11 15.21 11 13C11 10.79 9.21 9 7 9ZM7 15C5.9 15 5 14.1 5 13C5 11.9 5.9 11 7 11C8.1 11 9 11.9 9 13C9 14.1 8.1 15 7 15Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Speaker;
