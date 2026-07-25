import React from "react";
import { withIcon } from "../../hoc";

const RunCircle = withIcon(({ size }) => {
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
          d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"
          fill="currentColor"
        />
        <path
          d="M11.54 6.97C11.31 6.5 10.78 6.26 10.28 6.44L7 7.65V10H8V8.35L9.54 7.78L8.58 12.67L5.8 12.1L5.6 13.08L9.36 13.85L9.88 11.21L11 12.42V16H12V12.03L10.68 10.59L11.09 8.24C11.99 9.46 13.3 10 14 10V9C13.59 9 12.37 8.67 11.54 6.97Z"
          fill="currentColor"
        />
        <path
          d="M11.5 6C12.0523 6 12.5 5.55228 12.5 5C12.5 4.44772 12.0523 4 11.5 4C10.9477 4 10.5 4.44772 10.5 5C10.5 5.55228 10.9477 6 11.5 6Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default RunCircle;
