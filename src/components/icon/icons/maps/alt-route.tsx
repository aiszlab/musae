import React from "react";
import { withIcon } from "../../hoc";

const AltRoute = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(1.2, 0) scale(1.2)">
        <path
          d="M6.78 9.16L5.36 10.58C4.68 9.89 4.02 9 3.57 7.64L5.51 7.15C5.83 8.04 6.28 8.65 6.78 9.16ZM8 4L4 0L0 4H3.02C3.04 4.81 3.1 5.54 3.21 6.17L5.15 5.68C5.08 5.2 5.03 4.63 5.02 4H8ZM18 4L14 0L10 4H12.99C12.89 7.68 11.71 8.75 10.45 9.88C9.95 10.32 9.44 10.8 9 11.43C8.66 10.94 8.27 10.55 7.87 10.19L6.46 11.6C7.39 12.45 8 13.14 8 15V20H10V15C10 12.98 10.71 12.34 11.79 11.37C13.17 10.13 14.87 8.59 14.99 4H18Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default AltRoute;
