import React from "react";
import { withIcon } from "../../hoc";

const ScreenSearchDesktop = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 2.1818) scale(1.0909)">
        <path
          d="M3 15H19C20.1 15 20.99 14.1 20.99 13L21 2C21 0.9 20.1 0 19 0H3C1.9 0 1 0.9 1 2V13C1 14.1 1.9 15 3 15ZM3 2H19V13H3V2Z"
          fill="currentColor"
        />
        <path d="M22 16H0V18H22V16Z" fill="currentColor" />
        <path
          d="M12.97 4.53C11.6 3.16 9.39 3.16 8.02 4.53C6.65 5.9 6.65 8.11 8.02 9.48C9.2 10.66 11.02 10.82 12.38 9.95L14.47 12.04L15.53 10.98L13.44 8.89C14.31 7.53 14.16 5.71 12.97 4.53ZM11.91 8.41C11.13 9.19 9.86 9.19 9.08 8.41C8.3 7.63 8.3 6.36 9.08 5.58C9.86 4.8 11.13 4.8 11.91 5.58C12.69 6.37 12.69 7.63 11.91 8.41Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default ScreenSearchDesktop;
