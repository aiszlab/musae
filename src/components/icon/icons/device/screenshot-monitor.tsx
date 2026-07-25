import React from "react";
import { withIcon } from "../../hoc";

const ScreenshotMonitor = withIcon(({ size }) => {
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
          d="M18 0H2C0.89 0 0 0.89 0 2V14C0 15.1 0.89 16 2 16H6V18H14V16H18C19.1 16 20 15.1 20 14V2C20 0.89 19.1 0 18 0ZM18 14H2V2H18V14Z"
          fill="currentColor"
        />
        <path d="M4.5 4.5H7V3H3V7H4.5V4.5Z" fill="currentColor" />
        <path d="M17 9H15.5V11.5H13V13H17V9Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default ScreenshotMonitor;
