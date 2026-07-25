import React from "react";
import { withIcon } from "../../hoc";

const DownloadDone = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(1.5, 0) scale(1.5)">
        <path
          d="M0 14H14V16H0V14ZM4.6 11.3L0 6.7L2 4.8L4.6 7.4L12 0L14 2L4.6 11.3Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default DownloadDone;
