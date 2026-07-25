import React from "react";
import { withIcon } from "../../hoc";

const PieChart = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.2)">
        <path
          d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM17.93 9H11V2.07C14.61 2.52 17.48 5.39 17.93 9ZM2 10C2 5.93 5.06 2.56 9 2.07V17.93C5.06 17.44 2 14.07 2 10ZM11 17.93V11H17.93C17.48 14.61 14.61 17.48 11 17.93Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default PieChart;
