import React from "react";
import { withIcon } from "../../hoc";

const WifiCalling = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0.6316) scale(1.2632)">
        <path
          d="M17 12.51C15.76 12.51 14.55 12.31 13.43 11.94C13.33 11.9 13.22 11.89 13.12 11.89C12.86 11.89 12.61 11.99 12.41 12.18L10.21 14.38C7.38 12.93 5.06 10.62 3.62 7.79L5.82 5.59C6.1 5.31 6.18 4.92 6.07 4.57C5.7 3.45 5.5 2.25 5.5 1C5.5 0.45 5.05 0 4.5 0H1C0.45 0 0 0.45 0 1C0 10.39 7.61 18 17 18C17.55 18 18 17.55 18 17V13.51C18 12.96 17.55 12.51 17 12.51ZM2.03 2H3.53C3.6 2.89 3.75 3.76 3.99 4.59L2.79 5.79C2.38 4.59 2.12 3.32 2.03 2ZM16 15.97C14.68 15.88 13.41 15.62 12.2 15.22L13.39 14.03C14.24 14.27 15.11 14.42 15.99 14.48V15.97H16Z"
          fill="currentColor"
        />
        <path
          d="M19 1.95C18.79 1.78 16.67 0 13.5 0C10.32 0 8.21 1.78 8 1.95L13.5 9L19 1.95Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default WifiCalling;
