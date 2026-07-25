import React from "react";
import { withIcon } from "../../hoc";

const FlipCameraAndroid = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.2)">
        <path
          d="M7 10C7 11.66 8.34 13 10 13C11.66 13 13 11.66 13 10C13 8.34 11.66 7 10 7C8.34 7 7 8.34 7 10ZM11 10C11 10.55 10.55 11 10 11C9.45 11 9 10.55 9 10C9 9.45 9.45 9 10 9C10.55 9 11 9.45 11 10Z"
          fill="currentColor"
        />
        <path
          d="M6 8V6H3.09C4.47 3.61 7.05 2 10 2C13.72 2 16.85 4.56 17.74 8H19.8C18.87 3.44 14.84 0 10 0C6.73 0 3.82 1.58 2 4.01V2H0V8H6Z"
          fill="currentColor"
        />
        <path
          d="M14 12V14H16.91C15.53 16.39 12.95 18 10 18C6.28 18 3.15 15.44 2.26 12H0.2C1.13 16.56 5.16 20 10 20C13.27 20 16.18 18.42 18 15.99V18H20V12H14Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default FlipCameraAndroid;
