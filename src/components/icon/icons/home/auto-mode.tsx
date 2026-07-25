import React from "react";
import { withIcon } from "../../hoc";

const AutoMode = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.0934)">
        <path
          d="M18.03 2.51C16.36 1.12 14.29 0.21 12 0V2.01C13.73 2.2 15.31 2.89 16.61 3.93L18.03 2.51Z"
          fill="currentColor"
        />
        <path
          d="M10 2.01V0C7.71 0.2 5.64 1.12 3.97 2.51L5.39 3.93C6.69 2.89 8.27 2.2 10 2.01Z"
          fill="currentColor"
        />
        <path
          d="M3.98 5.34L2.56 3.92C1.17 5.59 0.26 7.66 0.05 9.95H2.06C2.25 8.22 2.94 6.64 3.98 5.34Z"
          fill="currentColor"
        />
        <path
          d="M19.94 9.95H21.95C21.74 7.66 20.83 5.59 19.44 3.92L18.02 5.34C19.06 6.64 19.75 8.22 19.94 9.95Z"
          fill="currentColor"
        />
        <path
          d="M6 10.95L9.44 12.51L11 15.95L12.56 12.51L16 10.95L12.56 9.39L11 5.95L9.44 9.39L6 10.95Z"
          fill="currentColor"
        />
        <path
          d="M11 19.95C7.89 19.95 5.15 18.36 3.54 15.95H6V13.95H0V19.95H2V17.25C3.99 20.09 7.27 21.95 11 21.95C15.87 21.95 20 18.78 21.44 14.39L19.48 13.94C18.25 17.43 14.92 19.95 11 19.95Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default AutoMode;
