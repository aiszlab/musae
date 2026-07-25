import React from "react";
import { withIcon } from "../../hoc";

const TableChart = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0.6316) scale(1.2632)">
        <path
          d="M17 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H17C18.1 18 19 17.1 19 16V2C19 0.9 18.1 0 17 0ZM17 2V5H2V2H17ZM12 16H7V7H12V16ZM2 7H5V16H2V7ZM14 16V7H17V16H14Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default TableChart;
