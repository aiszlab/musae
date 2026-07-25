import React from "react";
import { withIcon } from "../../hoc";

const CoPresent = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 1.6364) scale(1.0909)">
        <path
          d="M20 0H2C0.9 0 0 0.9 0 2V10H2V2H20V18C21.1 18 22 17.1 22 16V2C22 0.9 21.1 0 20 0Z"
          fill="currentColor"
        />
        <path
          d="M12 7C12 4.79 10.21 3 8 3C5.79 3 4 4.79 4 7C4 9.21 5.79 11 8 11C10.21 11 12 9.21 12 7ZM6 7C6 5.9 6.9 5 8 5C9.1 5 10 5.9 10 7C10 8.1 9.1 9 8 9C6.9 9 6 8.1 6 7Z"
          fill="currentColor"
        />
        <path
          d="M14.39 13.56C12.71 12.7 10.53 12 8 12C5.47 12 3.29 12.7 1.61 13.56C0.61 14.07 0 15.1 0 16.22V19H16V16.22C16 15.1 15.39 14.07 14.39 13.56ZM14 17H2C2 16.28 1.9 15.66 2.52 15.34C3.71 14.73 5.63 14 8 14C10.37 14 12.29 14.73 13.48 15.34C14.11 15.66 14 16.29 14 17Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default CoPresent;
