import React from "react";
import { withIcon } from "../../hoc";

const MobileScreenShare = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(4.3691, 0) scale(1.0909)">
        <path
          d="M11.99 0H1.99C0.89 0 0 0.85 0 1.95V19.95C0 21.05 0.89 22 1.99 22H11.99C13.09 22 13.99 21.05 13.99 19.95V1.95C13.99 0.85 13.09 0 11.99 0ZM11.99 18H1.99V4H11.99V18ZM7.79 12.24V13.99L10.99 11L7.79 8.02V9.72C4.68 10.15 3.44 12.28 2.99 14.42C4.1 12.92 5.57 12.24 7.79 12.24Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default MobileScreenShare;
