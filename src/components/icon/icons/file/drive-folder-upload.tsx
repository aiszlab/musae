import React from "react";
import { withIcon } from "../../hoc";

const DriveFolderUpload = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 2.4) scale(1.2)">
        <path
          d="M18 2H10L8 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V4C20 2.9 19.1 2 18 2ZM18 14H2V2H7.17L9.17 4H18V14ZM7.41 10.42L9 8.84V13H11V8.84L12.59 10.43L14 9.01L10.01 5L6 9.01L7.41 10.42Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default DriveFolderUpload;
