import React from "react";
import { withIcon } from "../../hoc";

const MobileOff = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0.7527, 0) scale(1.0909)">
        <path
          d="M15.51 4V12.61L17.51 14.61V2C17.51 0.9 16.61 0 15.51 0H5.51C4.8 0 4.18 0.37 3.83 0.93L6.9 4H15.51ZM0 2.76L3.51 6.27V20C3.51 21.1 4.41 22 5.51 22H15.51C16.53 22 17.36 21.23 17.49 20.25L19.21 21.97L20.62 20.56L1.41 1.35L0 2.76ZM5.51 8.27L15.24 18H5.51V8.27Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default MobileOff;
