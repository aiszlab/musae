import React from "react";
import { withIcon } from "../../hoc";

const LocationOff = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(1.116, 0) scale(1.2)">
        <path
          d="M10 2C12.76 2 15 4.24 15 7C15 8.06 14.61 9.32 14 10.62L15.49 12.11C16.37 10.36 17 8.57 17 7C17 3.13 13.87 0 10 0C8.16 0 6.5 0.71 5.25 1.86L6.68 3.29C7.56 2.5 8.72 2 10 2ZM10 4.5C9.41 4.5 8.87 4.71 8.44 5.06L11.94 8.56C12.29 8.13 12.5 7.59 12.5 7C12.5 5.62 11.38 4.5 10 4.5ZM1.41 0.86L0 2.27L3.18 5.45C3.07 5.95 3 6.47 3 7C3 12.25 10 20 10 20C10 20 11.67 18.15 13.38 15.65L16.73 19L18.14 17.59L1.41 0.86ZM10 16.88C7.99 14.3 5.2 10.14 5.02 7.29L11.94 14.21C11.29 15.19 10.61 16.1 10 16.88Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default LocationOff;
