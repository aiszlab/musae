import React from "react";
import { withIcon } from "../../hoc";

const Weekend = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 4) scale(1)">
        <path
          d="M21 5V3C21 1.35 19.65 0 18 0H6C4.35 0 3 1.35 3 3V5C1.35 5 0 6.35 0 8V13C0 14.65 1.35 16 3 16H21C22.65 16 24 14.65 24 13V8C24 6.35 22.65 5 21 5ZM5 3C5 2.45 5.45 2 6 2H18C18.55 2 19 2.45 19 3V5.78C18.39 6.33 18 7.12 18 8V10H6V8C6 7.12 5.61 6.33 5 5.78V3ZM22 13C22 13.55 21.55 14 21 14H3C2.45 14 2 13.55 2 13V8C2 7.45 2.45 7 3 7C3.55 7 4 7.45 4 8V12H20V8C20 7.45 20.45 7 21 7C21.55 7 22 7.45 22 8V13Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Weekend;
