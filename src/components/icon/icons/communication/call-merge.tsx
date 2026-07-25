import React from "react";
import { withIcon } from "../../hoc";

const CallMerge = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(2.9024, 0) scale(1.4193)">
        <path
          d="M11.41 16.91L12.82 15.5L9.41 12.09L8 13.5L11.41 16.91ZM1.91 4.5H5.41V10.09L0 15.5L1.41 16.91L7.41 10.91V4.5H10.91L6.41 0L1.91 4.5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default CallMerge;
