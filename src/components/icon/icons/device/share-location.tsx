import React from "react";
import { withIcon } from "../../hoc";

const ShareLocation = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0.0241) scale(1.2036)">
        <path
          d="M10.99 17.88V19.9C13 19.7 14.83 18.9 16.31 17.69L14.89 16.26C13.78 17.12 12.45 17.7 10.99 17.88Z"
          fill="currentColor"
        />
        <path
          d="M2 9.95C2 5.9 5.03 2.54 8.95 2.02V0C3.92 0.53 0 4.79 0 9.95C0 15.11 3.92 19.37 8.95 19.9V17.88C5.03 17.36 2 14 2 9.95Z"
          fill="currentColor"
        />
        <path
          d="M17.92 8.95H19.94C19.74 6.94 18.94 5.11 17.73 3.63L16.3 5.06C17.16 6.16 17.74 7.49 17.92 8.95Z"
          fill="currentColor"
        />
        <path
          d="M16.31 2.21C14.83 1 12.99 0.2 10.99 0V2.02C12.45 2.2 13.78 2.78 14.89 3.64L16.31 2.21Z"
          fill="currentColor"
        />
        <path
          d="M16.3 14.85L17.73 16.27C18.94 14.79 19.74 12.96 19.94 10.95H17.92C17.74 12.41 17.16 13.74 16.3 14.85Z"
          fill="currentColor"
        />
        <path
          d="M13.97 9.05C13.97 6.56 12.07 4.95 9.97 4.95C7.87 4.95 5.97 6.56 5.97 9.05C5.97 10.71 7.3 12.68 9.97 14.95C12.64 12.68 13.97 10.71 13.97 9.05ZM9.97 9.95C9.38 9.95 8.9 9.47 8.9 8.88C8.9 8.29 9.38 7.81 9.97 7.81C10.56 7.81 11.04 8.29 11.04 8.88C11.04 9.47 10.56 9.95 9.97 9.95Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default ShareLocation;
