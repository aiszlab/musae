import React from "react";
import { withIcon } from "../../hoc";

const Brightness2 = withIcon(({ size }) => {
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
          d="M5 2C9.41 2 13 5.59 13 10C13 14.41 9.41 18 5 18C4.66 18 4.32 17.98 3.99 17.93C5.9 15.77 7 12.95 7 10C7 7.05 5.9 4.23 3.99 2.07C4.32 2.02 4.66 2 5 2ZM5 0C3.18 0 1.47 0.5 0 1.35C2.99 3.08 5 6.3 5 10C5 13.7 2.99 16.92 0 18.65C1.47 19.5 3.18 20 5 20C10.52 20 15 15.52 15 10C15 4.48 10.52 0 5 0Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Brightness2;
