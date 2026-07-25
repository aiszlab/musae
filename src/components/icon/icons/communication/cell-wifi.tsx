import React from "react";
import { withIcon } from "../../hoc";

const CellWifi = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0.5889, 0) scale(1.263)">
        <path
          d="M2.07 19.0025H18.07V2.9725L2.07 19.0025ZM16.07 17.0025H14.07V9.7825L16.07 7.7825V17.0025ZM1.29 4.2225L0 2.9325C3.9 -0.9775 10.24 -0.9775 14.15 2.9325L12.86 4.2225C9.67 1.0325 4.48 1.0325 1.29 4.2225ZM9 8.0725L7.07 10.0025L5.14 8.0725C6.21 7.0125 7.93 7.0125 9 8.0725ZM10.29 6.7925C8.51 5.0225 5.63 5.0225 3.86 6.7925L2.57 5.5025C5.05 3.0225 9.09 3.0225 11.57 5.5025L10.29 6.7925Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default CellWifi;
