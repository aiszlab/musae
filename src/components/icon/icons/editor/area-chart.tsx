import React from "react";
import { withIcon } from "../../hoc";

const IconAreaChart = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M17 7.5L12 3.5L7 10.5L3 7.5V20.5H21V7.5H17ZM19 17.45L12 12L8 17.5L5 15.1V11.5L7.44 13.33L12.4 6.38L16.3 9.5H19V17.45Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconAreaChart;
