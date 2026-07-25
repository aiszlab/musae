import React from "react";
import { withIcon } from "../../hoc";

const DataUsage = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0.03) scale(1.2)">
        <path
          d="M11 0V3.03C14.39 3.52 17 6.42 17 9.95C17 10.85 16.82 11.7 16.52 12.49L19.12 14.02C19.68 12.78 20 11.4 20 9.95C20 4.77 16.05 0.5 11 0ZM10 16.95C6.13 16.95 3 13.82 3 9.95C3 6.42 5.61 3.52 9 3.03V0C3.94 0.5 0 4.76 0 9.95C0 15.47 4.47 19.95 9.99 19.95C13.3 19.95 16.23 18.34 18.05 15.86L15.45 14.33C14.17 15.93 12.21 16.95 10 16.95Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default DataUsage;
