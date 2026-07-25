import React from "react";
import { withIcon } from "../../hoc";

const FolderCopy = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 1.6364) scale(1.0909)">
        <path
          d="M2 17H19V19H2C0.9 19 0 18.1 0 17V4H2V17ZM22 4V13C22 14.1 21.1 15 20 15H6C4.9 15 4 14.1 4 13L4.01 2C4.01 0.9 4.9 0 6 0H11L13 2H20C21.1 2 22 2.9 22 4ZM6 13H20V4H12.17L10.17 2H6V13Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default FolderCopy;
