import React from "react";
import { withIcon } from "../../hoc";

const SlowMotionVideo = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0.0301) scale(1.203)">
        <path
          d="M11 7.74L7.95 5.45V14.45L11 12.16L13.95 9.95L11 7.74ZM11 7.74L7.95 5.45V14.45L11 12.16L13.95 9.95L11 7.74ZM11 7.74L7.95 5.45V14.45L11 12.16L13.95 9.95L11 7.74ZM8.95 2.02V0C6.94 0.2 5.11 1 3.63 2.21L5.05 3.64C6.16 2.78 7.49 2.2 8.95 2.02ZM3.64 5.05L2.21 3.63C1 5.11 0.2 6.94 0 8.95H2.02C2.2 7.49 2.78 6.16 3.64 5.05ZM2.02 10.95H0C0.2 12.96 1 14.79 2.21 16.27L3.64 14.84C2.78 13.74 2.2 12.41 2.02 10.95ZM3.63 17.69C5.11 18.9 6.95 19.7 8.95 19.9V17.88C7.49 17.7 6.16 17.12 5.05 16.26L3.63 17.69ZM19.95 9.95C19.95 15.11 16.03 19.37 11 19.9V17.88C14.92 17.36 17.95 14 17.95 9.95C17.95 5.9 14.92 2.54 11 2.02V0C16.03 0.53 19.95 4.79 19.95 9.95Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default SlowMotionVideo;
