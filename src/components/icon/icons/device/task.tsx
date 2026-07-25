import React from "react";
import { withIcon } from "../../hoc";

const Task = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(2.4, 0) scale(1.2)">
        <path
          d="M10 0H2C0.9 0 0.0100002 0.9 0.0100002 2L0 18C0 19.1 0.89 20 1.99 20H14C15.1 20 16 19.1 16 18V6L10 0ZM14 18H2V2H9V7H14V18ZM4.82 11.05L3.4 12.46L6.94 16L12.6 10.34L11.19 8.93L6.95 13.17L4.82 11.05Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Task;
