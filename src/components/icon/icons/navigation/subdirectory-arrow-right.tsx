import React from "react";
import { withIcon } from "../../hoc";

const SubdirectoryArrowRight = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(1.4118, 0) scale(1.4118)">
        <path
          d="M15 11L9 17L7.58 15.58L11.17 12H0V0H2V10H11.17L7.58 6.42L9 5L15 11Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default SubdirectoryArrowRight;
