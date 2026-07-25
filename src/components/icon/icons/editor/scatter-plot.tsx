import React from "react";
import { withIcon } from "../../hoc";

const ScatterPlot = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(1.2245, 0) scale(1.2245)">
        <path
          d="M4 16C1.79 16 0 14.21 0 12C0 9.79 1.79 8 4 8C6.21 8 8 9.79 8 12C8 14.21 6.21 16 4 16ZM4 10C2.9 10 2 10.9 2 12C2 13.1 2.9 14 4 14C5.1 14 6 13.1 6 12C6 10.9 5.1 10 4 10ZM8 8C5.79 8 4 6.21 4 4C4 1.79 5.79 0 8 0C10.21 0 12 1.79 12 4C12 6.21 10.21 8 8 8ZM8 2C6.9 2 6 2.9 6 4C6 5.1 6.9 6 8 6C9.1 6 10 5.1 10 4C10 2.9 9.1 2 8 2ZM13.6 19.6C11.39 19.6 9.6 17.81 9.6 15.6C9.6 13.39 11.39 11.6 13.6 11.6C15.81 11.6 17.6 13.39 17.6 15.6C17.6 17.81 15.81 19.6 13.6 19.6ZM13.6 13.6C12.5 13.6 11.6 14.5 11.6 15.6C11.6 16.7 12.5 17.6 13.6 17.6C14.7 17.6 15.6 16.7 15.6 15.6C15.6 14.5 14.7 13.6 13.6 13.6Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default ScatterPlot;
