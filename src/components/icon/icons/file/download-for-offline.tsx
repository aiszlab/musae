import React from "react";
import { withIcon } from "../../hoc";

const DownloadForOffline = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.2)">
        <path
          d="M10 0C4.49 0 0 4.49 0 10C0 15.51 4.49 20 10 20C15.51 20 20 15.51 20 10C20 4.49 15.51 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM12.59 6.59L14 8L10 12L6 8L7.41 6.59L9 8.17V4H11V8.17L12.59 6.59ZM15 15H5V13H15V15Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default DownloadForOffline;
