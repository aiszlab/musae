import React from "react";
import { withIcon } from "../../hoc";

const FileDownloadDone = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0.1919) scale(1.476)">
        <path
          d="M16.26 1.41L14.85 0L5.66 9.19L1.41 4.95L0 6.36L5.66 12.02L16.26 1.41Z"
          fill="currentColor"
        />
        <path d="M15.13 14H1.13V16H15.13V14Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default FileDownloadDone;
