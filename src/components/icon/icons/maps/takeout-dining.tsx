import React from "react";
import { withIcon } from "../../hoc";

const TakeoutDining = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 1.8) scale(1.2)">
        <path
          d="M5.79 15L5.28 8H14.74L14.23 15H5.79ZM7.83 2H12.16L14.96 4.73L14.87 6H5.12L5.03 4.73L7.83 2ZM20 4.46L18.59 3.05L17 4.63L17.03 4.07L12.98 0H7.02L2.97 4.07L3 4.57L1.41 3.01L0 4.44L3.23 7.55L3.93 17H16.07L16.77 7.56L20 4.46Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default TakeoutDining;
