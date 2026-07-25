import React from "react";
import { withIcon } from "../../hoc";

const VideoFile = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(2.4, 0) scale(1.2)">
        <path
          d="M10 0H2C0.9 0 0 0.9 0 2V18C0 19.1 0.9 20 2 20H14C15.1 20 16 19.1 16 18V6L10 0ZM2 18V2H9V7H14V18H2ZM10 12L12 10.94V15.06L10 14V15C10 15.55 9.55 16 9 16H5C4.45 16 4 15.55 4 15V11C4 10.45 4.45 10 5 10H9C9.55 10 10 10.45 10 11V12Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default VideoFile;
