import React from "react";
import { withIcon } from "../../hoc";

const Bedtime = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0.7984, 0) scale(1.2006)">
        <path
          d="M7.27 2.48C5.64 10.02 11.02 14.89 14.93 16.28C13.54 17.37 11.81 17.99 10 17.99C5.59 17.99 2 14.4 2 9.99C2 6.54 4.2 3.59 7.27 2.48ZM9.99 0C4.4 0 0 4.53 0 9.99C0 15.51 4.48 19.99 10 19.99C13.71 19.99 16.93 17.97 18.66 14.97C11.15 14.72 6.57 6.54 10.34 0H9.99Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Bedtime;
