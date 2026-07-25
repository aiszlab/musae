import React from "react";
import { withIcon } from "../../hoc";

const DinnerDining = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 1.2) scale(1.2)">
        <path d="M0 16L2 18H18L20 16H0Z" fill="currentColor" />
        <path
          d="M1 15H17.97C18.26 11.74 15.69 9 12.49 9C10.14 9 8.14 10.48 7.35 12.55C6.94 12.32 6.48 12.17 6 12.08V6H7.75C8.99 6 10 4.99 10 3.75H19V2.25H10C10 1.01 8.99 0 7.75 0H1V1.5H2V2.25H1V3.75H2V4.5H1V6H2V13.39C1.56 13.85 1.22 14.39 1 15ZM12.5 11C13.49 11 14.41 11.4 15.08 12.14C15.32 12.4 15.52 12.69 15.66 13H9.34C9.92 11.79 11.15 11 12.5 11ZM6 1.5H8V2.25H6V1.5ZM6 3.75H8V4.5H6V3.75ZM3.5 1.5H4.5V2.25H3.5V1.5ZM3.5 3.75H4.5V4.5H3.5V3.75ZM3.5 6H4.5V12.06C4.15 12.12 3.82 12.23 3.5 12.36V6Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default DinnerDining;
