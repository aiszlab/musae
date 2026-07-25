import React from "react";
import { withIcon } from "../../hoc";

const CarRepair = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(1.8947, 0) scale(1.2632)">
        <path
          d="M5 8.5C5.55228 8.5 6 8.05228 6 7.5C6 6.94772 5.55228 6.5 5 6.5C4.44772 6.5 4 6.94772 4 7.5C4 8.05228 4.44772 8.5 5 8.5Z"
          fill="currentColor"
        />
        <path
          d="M11 8.5C11.5523 8.5 12 8.05228 12 7.5C12 6.94772 11.5523 6.5 11 6.5C10.4477 6.5 10 6.94772 10 7.5C10 8.05228 10.4477 8.5 11 8.5Z"
          fill="currentColor"
        />
        <path
          d="M1.78 13H2.22C2.65 13 3 12.64 3 12.19V11H13V12.19C13 12.64 13.34 13 13.78 13H14.22C14.65 13 15 12.64 15 12.19V5.69C15 5.69 13.66 1.66 13.44 1C13.39 0.84 13.32 0.71 13.25 0.6C13.23 0.58 13.22 0.56 13.2 0.53C12.82 0.00999999 12.28 0 12.28 0H3.72C3.72 0 3.18 0.00999999 2.8 0.54C2.78 0.56 2.77 0.58 2.75 0.6C2.68 0.71 2.61 0.84 2.56 1C2.34 1.66 1 5.69 1 5.69V12.19C1 12.64 1.35 13 1.78 13ZM4.33 2H11.67L11.9 2.69L12.33 4H3.67L4.33 2ZM3 6H13V9H3V6Z"
          fill="currentColor"
        />
        <path d="M0 14.01V16H7V19H9V16H16V14.01H0Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default CarRepair;
