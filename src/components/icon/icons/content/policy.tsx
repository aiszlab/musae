import React from "react";
import { withIcon } from "../../hoc";

const Policy = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(2.1818, 0) scale(1.0909)">
        <path
          d="M9 0L0 4V10C0 15.55 3.84 20.74 9 22C14.16 20.74 18 15.55 18 10V4L9 0ZM16 10C16 11.85 15.49 13.65 14.62 15.21L13.17 13.76C14.46 11.82 14.24 9.18 12.53 7.47C10.58 5.52 7.41 5.52 5.46 7.47C3.51 9.42 3.51 12.59 5.46 14.54C7.17 16.25 9.81 16.46 11.75 15.18L13.47 16.9C12.28 18.32 10.74 19.41 9 19.94C4.98 18.69 2 14.52 2 10V5.3L9 2.19L16 5.3V10ZM9 14C7.34 14 6 12.66 6 11C6 9.34 7.34 8 9 8C10.66 8 12 9.34 12 11C12 12.66 10.66 14 9 14Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Policy;
