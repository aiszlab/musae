import React from "react";
import { withIcon } from "../../hoc";

const Timer = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(1.7143, 0) scale(1.1429)">
        <path
          d="M12 0H6V2H12V0ZM8 13H10V7H8V13ZM16.03 6.39L17.45 4.97C17.02 4.46 16.55 3.98 16.04 3.56L14.62 4.98C13.07 3.74 11.12 3 9 3C4.03 3 0 7.03 0 12C0 16.97 4.02 21 9 21C13.98 21 18 16.97 18 12C18 9.88 17.26 7.93 16.03 6.39ZM9 19C5.13 19 2 15.87 2 12C2 8.13 5.13 5 9 5C12.87 5 16 8.13 16 12C16 15.87 12.87 19 9 19Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Timer;
