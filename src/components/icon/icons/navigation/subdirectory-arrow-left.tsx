import React from "react";
import { withIcon } from "../../hoc";

const SubdirectoryArrowLeft = withIcon(({ size }) => {
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
          d="M6 5L7.42 6.42L3.83 10H13V0H15V12H3.83L7.42 15.58L6 17L0 11L6 5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default SubdirectoryArrowLeft;
