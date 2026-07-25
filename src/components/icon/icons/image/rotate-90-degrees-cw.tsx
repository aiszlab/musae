import React from "react";
import { withIcon } from "../../hoc";

const Rotate90DegreesCw = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.1429)">
        <path
          d="M0 12C0 16.97 4.03 21 9 21C10.76 21 12.4 20.49 13.79 19.62L12.33 18.16C11.34 18.69 10.2 19 9 19C5.14 19 2 15.86 2 12C2 8.14 5.14 5 9 5H9.17L7.59 6.59L9 8L13 4L9 0L7.58 1.41L9.17 3H9C4.03 3 0 7.03 0 12ZM9 12L15 18L21 12L15 6L9 12ZM15 15.17L11.83 12L15 8.83L18.17 12L15 15.17Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Rotate90DegreesCw;
