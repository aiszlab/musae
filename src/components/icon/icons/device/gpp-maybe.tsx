import React from "react";
import { withIcon } from "../../hoc";

const GppMaybe = withIcon(({ size }) => {
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
          d="M8 0L0 3V9.09C0 14.14 3.41 18.85 8 20C12.59 18.85 16 14.14 16 9.09V3L8 0ZM14 9.09C14 13.09 11.45 16.79 8 17.92C4.55 16.79 2 13.1 2 9.09V4.39L8 2.14L14 4.39V9.09Z"
          fill="currentColor"
        />
        <path d="M9 12H7V14H9V12Z" fill="currentColor" />
        <path d="M9 5H7V10H9V5Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default GppMaybe;
