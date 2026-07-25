import React from "react";
import { withIcon } from "../../hoc";

const StopScreenShare = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 1.43) scale(1)">
        <path
          d="M21.79 16.43L23.79 18.43H24V16.43H21.79ZM1.11 1.41L2.66 2.97C2.25 3.34 2 3.86 2 4.45V14.43C2 15.53 2.9 16.43 4.01 16.43H0V18.43H18.13L20.84 21.14L22.25 19.73L2.52 0L1.11 1.41ZM4 4.45H4.13L9.08 9.38C7.94 10.5 7.31 11.95 7 13.43C7.96 12.14 9.13 11.35 10.67 10.97L14.13 14.45H4V4.45ZM20 4.45V14.64L21.3 15.94C21.72 15.57 22 15.05 22 14.45V4.45C22 3.34 21.1 2.45 20 2.45H7.8L9.8 4.45H20ZM12.93 7.58L15.72 10.36L17 9.16L13 5.43V7.56L12.93 7.58Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default StopScreenShare;
