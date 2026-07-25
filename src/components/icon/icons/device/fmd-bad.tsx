import React from "react";
import { withIcon } from "../../hoc";

const FmdBad = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(2.4, 0) scale(1.2)">
        <path
          d="M8 0C3.8 0 0 3.22 0 8.2C0 11.52 2.67 15.45 8 20C13.33 15.45 16 11.52 16 8.2C16 3.22 12.2 0 8 0ZM8 17.33C3.95 13.63 2 10.54 2 8.19C2 4.57 4.65 2 8 2C11.35 2 14 4.57 14 8.2C14 10.54 12.05 13.64 8 17.33Z"
          fill="currentColor"
        />
        <path d="M9 4H7V9H9V4Z" fill="currentColor" />
        <path d="M9 11H7V13H9V11Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default FmdBad;
