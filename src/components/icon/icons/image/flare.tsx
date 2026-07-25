import React from "react";
import { withIcon } from "../../hoc";

const Flare = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.0909)">
        <path
          d="M6 10H0V12H6V10ZM8.17 6.76L6.05 4.64L4.64 6.05L6.76 8.17L8.17 6.76ZM12 0H10V6H12V0ZM17.36 6.05L15.95 4.64L13.83 6.76L15.24 8.17L17.36 6.05ZM16 10V12H22V10H16ZM11 8C9.34 8 8 9.34 8 11C8 12.66 9.34 14 11 14C12.66 14 14 12.66 14 11C14 9.34 12.66 8 11 8ZM13.83 15.24L15.95 17.36L17.36 15.95L15.24 13.83L13.83 15.24ZM4.64 15.95L6.05 17.36L8.17 15.24L6.76 13.83L4.64 15.95ZM10 22H12V16H10V22Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Flare;
