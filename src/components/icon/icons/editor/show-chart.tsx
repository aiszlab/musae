import React from "react";
import { withIcon } from "../../hoc";

const IconShowChart = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M3.5 18.4898L9.5 12.4798L13.5 16.4798L22 6.91977L20.59 5.50977L13.5 13.4798L9.5 9.47976L2 16.9898L3.5 18.4898Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconShowChart;
