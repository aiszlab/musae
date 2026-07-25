import React from "react";
import { withIcon } from "../../hoc";

const AreaChart = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0.6667) scale(1.3333)">
        <path
          d="M14 4L9 0L4 7L0 4V17H18V4H14ZM16 13.95L9 8.5L5 14L2 11.6V8L4.44 9.83L9.4 2.88L13.3 6H16V13.95Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default AreaChart;
