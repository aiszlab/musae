import React from "react";
import { withIcon } from "../../hoc";

const ElectricCar = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(2.1818, 0) scale(1.0909)">
        <path
          d="M15.92 1.01C15.72 0.42 15.16 0 14.5 0H3.5C2.84 0 2.29 0.42 2.08 1.01L0 7V15C0 15.55 0.45 16 1 16H2C2.55 16 3 15.55 3 15V14H15V15C15 15.55 15.45 16 16 16H17C17.55 16 18 15.55 18 15V7L15.92 1.01ZM3.85 2H14.14L15.22 5.11H2.77L3.85 2ZM16 12H2V7H16V12Z"
          fill="currentColor"
        />
        <path
          d="M4.5 11C5.32843 11 6 10.3284 6 9.5C6 8.67157 5.32843 8 4.5 8C3.67157 8 3 8.67157 3 9.5C3 10.3284 3.67157 11 4.5 11Z"
          fill="currentColor"
        />
        <path
          d="M13.5 11C14.3284 11 15 10.3284 15 9.5C15 8.67157 14.3284 8 13.5 8C12.6716 8 12 8.67157 12 9.5C12 10.3284 12.6716 11 13.5 11Z"
          fill="currentColor"
        />
        <path d="M4 19H8V17L14 20H10V22L4 19Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default ElectricCar;
