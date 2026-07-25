import React from "react";
import { withIcon } from "../../hoc";

const MobileFriendly = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(2.2855, 0) scale(1.0909)">
        <path
          d="M15.81 0H5.81C4.71 0 3.81 0.9 3.81 2V5H5.81V3H15.81V19H5.81V17H3.81V20C3.81 21.1 4.71 22 5.81 22H15.81C16.91 22 17.81 21.1 17.81 20V2C17.81 0.9 16.91 0 15.81 0ZM3.82 12.47L1.27 9.92L0 11.19L3.81 15L11 7.81L9.73 6.54L3.82 12.47Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default MobileFriendly;
