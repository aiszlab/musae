import React from "react";
import { withIcon } from "../../hoc";

const WifiTethering = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0.81) scale(1.2)">
        <path
          d="M10 8C8.9 8 8 8.9 8 10C8 11.1 8.9 12 10 12C11.1 12 12 11.1 12 10C12 8.9 11.1 8 10 8ZM16 10C16 6.69 13.31 4 10 4C6.69 4 4 6.69 4 10C4 12.22 5.21 14.15 7 15.19L8 13.45C6.81 12.75 6 11.48 6 10C6 7.79 7.79 6 10 6C12.21 6 14 7.79 14 10C14 11.48 13.19 12.75 12 13.45L13 15.19C14.79 14.15 16 12.22 16 10ZM10 0C4.48 0 0 4.48 0 10C0 13.7 2.01 16.92 4.99 18.65L5.99 16.92C3.61 15.53 2 12.96 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 12.96 16.39 15.53 14 16.92L15 18.65C17.99 16.92 20 13.7 20 10C20 4.48 15.52 0 10 0Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default WifiTethering;
