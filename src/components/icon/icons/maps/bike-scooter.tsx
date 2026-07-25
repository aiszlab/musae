import React from "react";
import { withIcon } from "../../hoc";

const BikeScooter = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 3) scale(1)">
        <path
          d="M10 11H10.74L8.82 2.56C8.61 1.65 7.8 1 6.87 1H3V3H6.87L8.29 9.25H8.28C6.12 9.9 4.47 11.73 4.09 14H0V16H6V15C6 12.79 7.79 11 10 11Z"
          fill="currentColor"
        />
        <path
          d="M19 5H18.18L16.83 1.31C16.55 0.52 15.8 0 14.96 0H11V2H14.96L16.06 5H10.4L10.86 7H15C14.57 7.58 14.25 8.25 14.1 9H11.31L11.77 11H14.1C14.54 13.23 16.41 14.88 18.75 14.99C21.55 15.12 24 12.8 24 9.99C24 7.2 21.8 5 19 5ZM19 13C17.32 13 16 11.68 16 10C16 9.07 16.41 8.27 17.05 7.72L18.01 10.36L19.89 9.68L18.92 7.01C18.95 7.01 18.98 7 19.01 7C20.69 7 22.01 8.32 22.01 10C22.01 11.68 20.68 13 19 13Z"
          fill="currentColor"
        />
        <path
          d="M10 12C8.34 12 7 13.34 7 15C7 16.66 8.34 18 10 18C11.66 18 13 16.66 13 15C13 13.34 11.66 12 10 12ZM10 16C9.45 16 9 15.55 9 15C9 14.45 9.45 14 10 14C10.55 14 11 14.45 11 15C11 15.55 10.55 16 10 16Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default BikeScooter;
