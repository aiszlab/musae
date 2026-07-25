import React from "react";
import { withIcon } from "../../hoc";

const Merge = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(2.6667, 0) scale(1.3333)">
        <path
          d="M1.41 18L0 16.59L4.83 11.76C5.58 11.01 6 9.99 6 8.93V3.83L4.41 5.41L3 4L7 0L11 4L9.59 5.41L8 3.83V8.93C8 9.99 8.42 11.01 9.17 11.76L14 16.59L12.59 18L7 12.41L1.41 18Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Merge;
