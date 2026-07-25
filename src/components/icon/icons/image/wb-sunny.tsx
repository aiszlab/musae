import React from "react";
import { withIcon } from "../../hoc";

const WbSunny = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0.0545) scale(1.0909)">
        <path
          d="M5.76 4.29L3.96 2.5L2.55 3.91L4.34 5.7L5.76 4.29ZM0 9.95H3V11.95H0V9.95ZM10 0H12V2.95H10V0ZM18.04 2.495L19.448 3.902L17.658 5.692L16.251 4.284L18.04 2.495ZM16.24 17.61L18.03 19.41L19.44 18L17.64 16.21L16.24 17.61ZM19 9.95H22V11.95H19V9.95ZM11 4.95C7.69 4.95 5 7.64 5 10.95C5 14.26 7.69 16.95 11 16.95C14.31 16.95 17 14.26 17 10.95C17 7.64 14.31 4.95 11 4.95ZM11 14.95C8.79 14.95 7 13.16 7 10.95C7 8.74 8.79 6.95 11 6.95C13.21 6.95 15 8.74 15 10.95C15 13.16 13.21 14.95 11 14.95ZM10 18.95H12V21.9H10V18.95ZM2.55 17.99L3.96 19.4L5.75 17.6L4.34 16.19L2.55 17.99Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default WbSunny;
