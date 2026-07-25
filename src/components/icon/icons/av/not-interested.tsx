import React from "react";
import { withIcon } from "../../hoc";

const NotInterested = withIcon(({ size }) => {
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
          d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 8.15 2.63 6.45 3.69 5.1L14.9 16.31C13.55 17.37 11.85 18 10 18ZM16.31 14.9L5.1 3.69C6.45 2.63 8.15 2 10 2C14.42 2 18 5.58 18 10C18 11.85 17.37 13.55 16.31 14.9Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default NotInterested;
