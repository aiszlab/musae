import React from "react";
import { withIcon } from "../../hoc";

const BatteryStd = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(6, 0) scale(1.2)">
        <path
          d="M8.67 2H7V0H3V2H1.33C0.6 2 0 2.6 0 3.33V18.66C0 19.4 0.6 20 1.33 20H8.66C9.4 20 10 19.4 10 18.67V3.33C10 2.6 9.4 2 8.67 2Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default BatteryStd;
