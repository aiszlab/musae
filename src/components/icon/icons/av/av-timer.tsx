import React from "react";
import { withIcon } from "../../hoc";

const AvTimer = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.3333)">
        <path
          d="M8 14C8 14.55 8.45 15 9 15C9.55 15 10 14.55 10 14C10 13.45 9.55 13 9 13C8.45 13 8 13.45 8 14ZM8 0V4H10V2.08C13.39 2.57 16 5.47 16 9C16 12.87 12.87 16 9 16C5.13 16 2 12.87 2 9C2 7.32 2.59 5.78 3.58 4.58L9 10L10.41 8.59L3.61 1.79V1.81C1.42 3.45 0 6.05 0 9C0 13.97 4.02 18 9 18C13.97 18 18 13.97 18 9C18 4.03 13.97 0 9 0H8ZM15 9C15 8.45 14.55 8 14 8C13.45 8 13 8.45 13 9C13 9.55 13.45 10 14 10C14.55 10 15 9.55 15 9ZM3 9C3 9.55 3.45 10 4 10C4.55 10 5 9.55 5 9C5 8.45 4.55 8 4 8C3.45 8 3 8.45 3 9Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default AvTimer;
