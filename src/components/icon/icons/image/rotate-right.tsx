import React from "react";
import { withIcon } from "../../hoc";

const RotateRight = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(1.9017, 0) scale(1.2678)">
        <path
          d="M11.55 4.55L7 0V3.07C3.06 3.56 0 6.92 0 11C0 15.08 3.05 18.44 7 18.93V16.91C4.16 16.43 2 13.97 2 11C2 8.03 4.16 5.57 7 5.09V9L11.55 4.55ZM15.93 10C15.76 8.61 15.21 7.27 14.31 6.11L12.89 7.53C13.43 8.28 13.77 9.13 13.91 10H15.93ZM9 16.9V18.92C10.39 18.75 11.74 18.21 12.9 17.31L11.46 15.87C10.71 16.41 9.87 16.76 9 16.9ZM12.89 14.48L14.31 15.89C15.21 14.73 15.76 13.39 15.93 12H13.91C13.77 12.87 13.43 13.72 12.89 14.48Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default RotateRight;
