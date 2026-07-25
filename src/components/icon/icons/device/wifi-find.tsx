import React from "react";
import { withIcon } from "../../hoc";

const WifiFind = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 3.5) scale(1)">
        <path
          d="M12 2C16.14 2 19.88 3.68 22.59 6.39L24 4.98C20.93 1.9 16.69 0 12 0C7.31 0 3.07 1.9 0 4.98L12 17L13.41 15.58L2.93 5.08C5.45 3.16 8.59 2 12 2Z"
          fill="currentColor"
        />
        <path
          d="M21 10C21 7.76 19.24 6 17 6C14.76 6 13 7.76 13 10C13 12.24 14.76 14 17 14C17.75 14 18.44 13.79 19.03 13.44L21.59 16L23 14.59L20.44 12.03C20.79 11.44 21 10.75 21 10ZM17 12C15.88 12 15 11.12 15 10C15 8.88 15.88 8 17 8C18.12 8 19 8.88 19 10C19 11.12 18.12 12 17 12Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default WifiFind;
