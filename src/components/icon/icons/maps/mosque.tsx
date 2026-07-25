import React from "react";
import { withIcon } from "../../hoc";

const Mosque = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 2) scale(1)">
        <path
          d="M24 6C24 4.9 22 3 22 3C22 3 20 4.9 20 6C20 6.74 20.4 7.38 21 7.72V12H19V10C19 9.05 18.34 8.26 17.45 8.06C17.79 7.48 18 6.81 18 6.09C18 4.78 17.35 3.56 16.26 2.84L12 0L7.74 2.84C6.65 3.56 6 4.78 6 6.09C6 6.81 6.21 7.48 6.55 8.05C5.66 8.26 5 9.05 5 10V12H3V7.72C3.6 7.38 4 6.74 4 6C4 4.9 2 3 2 3C2 3 0 4.9 0 6C0 6.74 0.4 7.38 1 7.72V20H11V16C11 15.45 11.45 15 12 15C12.55 15 13 15.45 13 16V20H23V7.72C23.6 7.38 24 6.74 24 6ZM8.85 4.5L12 2.4L15.15 4.5C15.68 4.86 16 5.45 16 6.09C16 7.14 15.14 8 14.09 8H9.91C8.86 8 8 7.14 8 6.09C8 5.45 8.32 4.86 8.85 4.5ZM21 18H15V16C15 14.35 13.65 13 12 13C10.35 13 9 14.35 9 16V18H3V14H7V10H17V14H21V18Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Mosque;
