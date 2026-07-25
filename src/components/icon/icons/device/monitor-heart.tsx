import React from "react";
import { withIcon } from "../../hoc";

const MonitorHeart = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 2.4) scale(1.2)">
        <path d="M18 0H2C0.9 0 0 0.9 0 2V5H2V2H18V5H20V2C20 0.9 19.1 0 18 0Z" fill="currentColor" />
        <path
          d="M18 14H2V11H0V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V11H18V14Z"
          fill="currentColor"
        />
        <path
          d="M12.89 3.55C12.55 2.87 11.44 2.87 11.1 3.55L8 9.76L6.89 7.55C6.72 7.21 6.38 7 6 7H0V9H5.38L7.1 12.45C7.28 12.79 7.62 13 8 13C8.38 13 8.72 12.79 8.89 12.45L12 6.24L13.11 8.45C13.28 8.79 13.62 9 14 9H20V7H14.62L12.89 3.55Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default MonitorHeart;
