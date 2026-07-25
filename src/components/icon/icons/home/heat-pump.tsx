import React from "react";
import { withIcon } from "../../hoc";

const HeatPump = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.3333)">
        <path
          d="M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM16 16H2V2H16V16Z"
          fill="currentColor"
        />
        <path
          d="M9 15C12.31 15 15 12.31 15 9C15 5.69 12.31 3 9 3C5.69 3 3 5.69 3 9C3 12.31 5.69 15 9 15ZM8.25 12.92C7.7 12.82 7.2 12.6 6.75 12.3L8.25 10.8V12.92ZM9.75 12.92V10.81L11.25 12.31C10.8 12.61 10.3 12.82 9.75 12.92ZM12.31 11.25L10.81 9.75H12.92C12.82 10.3 12.61 10.8 12.31 11.25ZM12.92 8.25H10.81L12.31 6.75C12.61 7.2 12.82 7.7 12.92 8.25ZM9.75 5.08C10.3 5.18 10.8 5.4 11.25 5.7L9.75 7.2V5.08ZM9 8C9.55 8 10 8.45 10 9C10 9.55 9.55 10 9 10C8.45 10 8 9.55 8 9C8 8.45 8.45 8 9 8ZM8.25 5.08V7.19L6.75 5.69C7.2 5.39 7.7 5.18 8.25 5.08ZM5.69 6.75L7.19 8.25H5.08C5.18 7.7 5.39 7.2 5.69 6.75ZM7.19 9.75L5.69 11.25C5.39 10.81 5.18 10.3 5.07 9.75H7.19Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default HeatPump;
