import React from "react";
import { withIcon } from "../../hoc";

const LeakAdd = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.3333)">
        <path
          d="M3 0H0V3C1.66 3 3 1.66 3 0ZM11 0H9C9 4.97 4.97 9 0 9V11C6.08 11 11 6.07 11 0ZM7 0H5C5 2.76 2.76 5 0 5V7C3.87 7 7 3.87 7 0ZM7 18H9C9 13.03 13.03 9 18 9V7C11.93 7 7 11.93 7 18ZM15 18H18V15C16.34 15 15 16.34 15 18ZM11 18H13C13 15.24 15.24 13 18 13V11C14.13 11 11 14.13 11 18Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default LeakAdd;
