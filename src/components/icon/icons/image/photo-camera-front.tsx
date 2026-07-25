import React from "react";
import { withIcon } from "../../hoc";

const PhotoCameraFront = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 1.2) scale(1.2)">
        <path
          d="M18 2H14.83L13 0H7L5.17 2H2C0.9 2 0 2.9 0 4V16C0 17.1 0.9 18 2 18H18C19.1 18 20 17.1 20 16V4C20 2.9 19.1 2 18 2ZM18 16H2V4H6.05L7.88 2H12.12L13.95 4H18V16Z"
          fill="currentColor"
        />
        <path
          d="M10 10C11.1046 10 12 9.10457 12 8C12 6.89543 11.1046 6 10 6C8.89543 6 8 6.89543 8 8C8 9.10457 8.89543 10 10 10Z"
          fill="currentColor"
        />
        <path
          d="M12.78 11.58C11.93 11.21 10.99 11 10 11C9.01 11 8.07 11.21 7.22 11.58C6.48 11.9 6 12.62 6 13.43V14H14V13.43C14 12.62 13.52 11.9 12.78 11.58Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default PhotoCameraFront;
