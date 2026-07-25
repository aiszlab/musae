import React from "react";
import { withIcon } from "../../hoc";

const Traffic = withIcon(({ size }) => {
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
          d="M16 7H13V5.86C14.72 5.41 16 3.86 16 2H13V1C13 0.45 12.55 0 12 0H4C3.45 0 3 0.45 3 1V2H0C0 3.86 1.28 5.41 3 5.86V7H0C0 8.86 1.28 10.41 3 10.86V12H0C0 13.86 1.28 15.41 3 15.86V17C3 17.55 3.45 18 4 18H12C12.55 18 13 17.55 13 17V15.86C14.72 15.41 16 13.86 16 12H13V10.86C14.72 10.41 16 8.86 16 7ZM11 16H5V2H11V16ZM8 15C8.83 15 9.5 14.33 9.5 13.5C9.5 12.67 8.83 12 8 12C7.17 12 6.5 12.67 6.5 13.5C6.5 14.33 7.17 15 8 15ZM8 10.5C8.83 10.5 9.5 9.83 9.5 9C9.5 8.17 8.83 7.5 8 7.5C7.17 7.5 6.5 8.17 6.5 9C6.5 9.83 7.17 10.5 8 10.5ZM8 6C8.83 6 9.5 5.33 9.5 4.5C9.5 3.67 8.83 3 8 3C7.17 3 6.5 3.67 6.5 4.5C6.5 5.33 7.17 6 8 6Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Traffic;
