import React from "react";
import { withIcon } from "../../hoc";

const LocalMovies = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(1.3333, 0) scale(1.3333)">
        <path
          d="M10 2V16H6V2H10ZM16 0H14V2H12V0H4V2H2V0H0V18H2V16H4V18H12V16H14V18H16V0ZM12 6V4H14V6H12ZM2 6V4H4V6H2ZM12 10V8H14V10H12ZM2 10V8H4V10H2ZM12 14V12H14V14H12ZM2 14V12H4V14H2Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default LocalMovies;
