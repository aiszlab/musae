import React from "react";
import { withIcon } from "../../hoc";

const MotionPhotosOff = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.1645)">
        <path
          d="M1.42 0.81L0 2.22L2.27 4.49C1.22 6.07 0.61 7.96 0.61 10C0.61 15.52 5.09 20 10.61 20C12.65 20 14.54 19.39 16.12 18.34L18.39 20.61L19.8 19.19L1.42 0.81ZM10.61 18C6.2 18 2.61 14.41 2.61 10C2.61 8.52 3.02 7.14 3.73 5.94L14.66 16.88C13.47 17.59 12.09 18 10.61 18Z"
          fill="currentColor"
        />
        <path
          d="M10.61 2C15.02 2 18.61 5.59 18.61 10C18.61 11.48 18.2 12.86 17.49 14.05L18.94 15.5C20 13.93 20.61 12.04 20.61 10C20.61 4.48 16.13 0 10.61 0C8.57 0 6.68 0.61 5.1 1.66L6.55 3.11C7.75 2.41 9.13 2 10.61 2Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default MotionPhotosOff;
