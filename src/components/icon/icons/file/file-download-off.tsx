import React from "react";
import { withIcon } from "../../hoc";

const FileDownloadOff = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.2121)">
        <path
          d="M16.61 12.36V12.19H18.61V14.36L16.61 12.36ZM14.02 9.78L15.61 8.19L14.2 6.78L12.61 8.36L14.02 9.78ZM11.61 7.36V1.19H9.61V5.36L11.61 7.36ZM19.8 18.38L1.42 0L0 1.41L6.19 7.6L5.61 8.19L10.61 13.19L11.2 12.6L13.78 15.19H4.61V12.19H2.61V15.19C2.61 16.29 3.51 17.19 4.61 17.19H15.78L18.39 19.8L19.8 18.38Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default FileDownloadOff;
