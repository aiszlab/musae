import React from "react";
import { withIcon } from "../../hoc";

const FireTruck = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 2.1818) scale(1.0909)">
        <path
          d="M21.9 7.69L20.46 3.37C20.18 2.55 19.42 2 18.56 2H18V1C18 0.45 17.55 0 17 0H16C15.45 0 15 0.45 15 1V2H13C11.9 2 11 2.9 11 4V8H0V13C0 14.1 0.9 15 2 15H3C3 16.66 4.34 18 6 18C7.66 18 9 16.66 9 15H13C13 16.66 14.34 18 16 18C17.66 18 19 16.66 19 15H22V8.32C22 8.11 21.97 7.9 21.9 7.69ZM13 4H18.56L19.89 8H13V4ZM6 16C5.45 16 5 15.55 5 15C5 14.45 5.45 14 6 14C6.55 14 7 14.45 7 15C7 15.55 6.55 16 6 16ZM11 13H8.22C7.67 12.39 6.89 12 6 12C5.11 12 4.33 12.39 3.78 13H2V10H11V13ZM16 16C15.45 16 15 15.55 15 15C15 14.45 15.45 14 16 14C16.55 14 17 14.45 17 15C17 15.55 16.55 16 16 16ZM18.22 13C17.67 12.39 16.88 12 16 12C15.12 12 14.33 12.39 13.78 13H13V10H20V13H18.22Z"
          fill="currentColor"
        />
        <path
          d="M10 5.5H9V3.5H10V2H0V3.5H1V5.5H0V7H10V5.5ZM7.5 5.5H5.75V3.5H7.5V5.5ZM2.5 3.5H4.25V5.5H2.5V3.5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default FireTruck;
