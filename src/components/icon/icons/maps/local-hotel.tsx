import React from "react";
import { withIcon } from "../../hoc";

const LocalHotel = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 3.8182) scale(1.0909)">
        <path
          d="M6 9C7.66 9 9 7.66 9 6C9 4.34 7.66 3 6 3C4.34 3 3 4.34 3 6C3 7.66 4.34 9 6 9ZM6 5C6.55 5 7 5.45 7 6C7 6.55 6.55 7 6 7C5.45 7 5 6.55 5 6C5 5.45 5.45 5 6 5ZM18 2H10V10H2V0H0V15H2V12H20V15H22V6C22 3.79 20.21 2 18 2ZM20 10H12V4H18C19.1 4 20 4.9 20 6V10Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default LocalHotel;
