import React from "react";
import { withIcon } from "../../hoc";

const Timelapse = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.2)">
        <path
          d="M14.24 5.76C13.07 4.59 11.54 4 10 4V10L5.76 14.24C8.1 16.58 11.9 16.58 14.25 14.24C16.59 11.9 16.59 8.1 14.24 5.76ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Timelapse;
