import React from "react";
import { withIcon } from "../../hoc";

const MultilineChart = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 3.906) scale(1.2)">
        <path
          d="M20 1.92L18.59 0.51L15.74 3.72C13.68 1.4 10.83 0 7.61 0C4.72 0 2.07 1.16 0 3L1.42 4.42C3.12 2.93 5.27 2 7.61 2C10.35 2 12.7 3.26 14.38 5.24L11.5 8.48L7.5 4.48L0 11.99L1.5 13.49L7.5 7.48L11.5 11.48L15.55 6.93C16.3 8.28 16.8 9.83 16.99 11.48H19C18.78 9.18 18.05 7.09 16.96 5.34L20 1.92Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default MultilineChart;
