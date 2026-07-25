import React from "react";
import { withIcon } from "../../hoc";

const ShapeLine = withIcon(({ size }) => {
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
          d="M5 10C7.76 10 10 7.76 10 5C10 2.24 7.76 0 5 0C2.24 0 0 2.24 0 5C0 7.76 2.24 10 5 10ZM5 2C6.65 2 8 3.35 8 5C8 6.65 6.65 8 5 8C3.35 8 2 6.65 2 5C2 3.35 3.35 2 5 2Z"
          fill="currentColor"
        />
        <path
          d="M20 13H15C13.9 13 13 13.9 13 15V20C13 21.1 13.9 22 15 22H20C21.1 22 22 21.1 22 20V15C22 13.9 21.1 13 20 13ZM20 20H15V15H20V20Z"
          fill="currentColor"
        />
        <path
          d="M16.71 6.7C17.11 6.89 17.54 7 18 7C19.65 7 21 5.65 21 4C21 2.35 19.65 1 18 1C16.35 1 15 2.35 15 4C15 4.46 15.11 4.89 15.3 5.29L5.29 15.3C4.89 15.11 4.46 15 4 15C2.35 15 1 16.35 1 18C1 19.65 2.35 21 4 21C5.65 21 7 19.65 7 18C7 17.54 6.89 17.11 6.7 16.71L16.71 6.7Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default ShapeLine;
