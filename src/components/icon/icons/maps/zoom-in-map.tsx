import React from "react";
import { withIcon } from "../../hoc";

const ZoomInMap = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.2632)">
        <path
          d="M6.5 6.5V0.5H4.5V3.09L1.41 0L0 1.41L3.09 4.5H0.5V6.5H6.5ZM18.5 6.5V4.5H15.91L19 1.41L17.59 0L14.5 3.09V0.5H12.5V6.5H18.5ZM0.5 12.5V14.5H3.09L0 17.59L1.41 19L4.5 15.91V18.5H6.5V12.5H0.5ZM12.5 12.5V18.5H14.5V15.91L17.59 19L19 17.59L15.91 14.5H18.5V12.5H12.5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default ZoomInMap;
