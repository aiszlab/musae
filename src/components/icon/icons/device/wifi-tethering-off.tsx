import React from "react";
import { withIcon } from "../../hoc";

const WifiTetheringOff = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 1.758) scale(1.2)">
        <path
          d="M10 4C6.69 4 4 6.69 4 10C4 11.66 4.68 13.15 5.76 14.24L7.18 12.82C6.45 12.1 6 11.11 6 10C6 7.79 7.79 6 10 6C12.21 6 14 7.79 14 10C14 11.11 13.55 12.1 12.82 12.82L14.24 14.24C15.32 13.15 16 11.66 16 10C16 6.69 13.31 4 10 4ZM10 0C4.48 0 0 4.48 0 10C0 12.76 1.12 15.26 2.93 17.07L4.35 15.65C2.9 14.21 2 12.21 2 10C2 5.58 5.58 2 10 2C12.53 2 14.78 3.17 16.24 5H18.66C16.93 2.01 13.7 0 10 0ZM10 8C8.9 8 8 8.9 8 10C8 10.55 8.23 11.05 8.59 11.41C8.95 11.77 9.45 12 10 12C10.55 12 11.05 11.77 11.41 11.41C11.77 11.05 12 10.55 12 10C12 8.9 11.1 8 10 8ZM18 7H20V13H18V7ZM18 15H20V17H18V15Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default WifiTetheringOff;
