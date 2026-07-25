import React from "react";
import { withIcon } from "../../hoc";

const VideoStable = withIcon(({ size }) => {
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
          d="M18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM2 14V2H4.95L2.62 10.73L14.82 14H2ZM13.62 11.61L5.07 9.32L6.38 4.4L14.94 6.69L13.62 11.61ZM18 14H15.05L17.39 5.27L5.18 2H18V14Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default VideoStable;
