import React from "react";
import { withIcon } from "../../hoc";

const Nightlight = withIcon(({ size }) => {
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
          d="M10 2C10.34 2 10.68 2.02 11.01 2.07C9.1 4.23 8 7.05 8 10C8 12.95 9.1 15.77 11.01 17.93C10.68 17.98 10.34 18 10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C11.82 20 13.53 19.5 15 18.65C12.01 16.92 10 13.7 10 10C10 6.3 12.01 3.08 15 1.35C13.53 0.5 11.82 0 10 0Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Nightlight;
