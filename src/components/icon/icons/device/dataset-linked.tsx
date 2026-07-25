import React from "react";
import { withIcon } from "../../hoc";

const DatasetLinked = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 1.1429) scale(1.1429)">
        <path d="M4 14H5.09C5.37 12.33 6.33 10.9 7.69 10H4V14Z" fill="currentColor" />
        <path
          d="M2 16V2H16V9H17C17.34 9 17.67 9.04 18 9.09V2C18 0.9 17.1 0 16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H5.81C5.46 17.39 5.21 16.72 5.09 16H2Z"
          fill="currentColor"
        />
        <path d="M8 4H4V8H8V4Z" fill="currentColor" />
        <path d="M14 4H10V8H14V4Z" fill="currentColor" />
        <path
          d="M13 17H11C9.9 17 9 16.1 9 15C9 13.9 9.9 13 11 13H13V11H11C8.79 11 7 12.79 7 15C7 17.21 8.79 19 11 19H13V17Z"
          fill="currentColor"
        />
        <path
          d="M17 11H15V13H17C18.1 13 19 13.9 19 15C19 16.1 18.1 17 17 17H15V19H17C19.21 19 21 17.21 21 15C21 12.79 19.21 11 17 11Z"
          fill="currentColor"
        />
        <path d="M17 16V14H11V16H17Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default DatasetLinked;
