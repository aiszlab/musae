import React from "react";
import { withIcon } from "../../hoc";

const DriveFileRenameOutline = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 1.3333) scale(1.3333)">
        <path d="M12 12L8 16H18V12H12Z" fill="currentColor" />
        <path
          d="M9.06 3.19L0 12.25V16H3.75L12.81 6.94L9.06 3.19ZM2.92 14H2V13.08L9.06 6.02L9.98 6.94L2.92 14Z"
          fill="currentColor"
        />
        <path
          d="M15.71 4.04C16.1 3.65 16.1 3.02 15.71 2.63L13.37 0.29C13.17 0.09 12.92 0 12.66 0C12.41 0 12.15 0.1 11.96 0.29L10.13 2.12L13.88 5.87L15.71 4.04Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default DriveFileRenameOutline;
