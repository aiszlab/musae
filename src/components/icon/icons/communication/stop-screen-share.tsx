import React from "react";
import { withIcon } from "../../hoc";

const IconStopScreenShare = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M21.79 17.8597L23.79 19.8597H24V17.8597H21.79ZM1.11 2.83969L2.66 4.39969C2.25 4.76969 2 5.28969 2 5.87969V15.8597C2 16.9597 2.9 17.8597 4.01 17.8597H0V19.8597H18.13L20.84 22.5697L22.25 21.1597L2.52 1.42969L1.11 2.83969ZM4 5.87969H4.13L9.08 10.8097C7.94 11.9297 7.31 13.3797 7 14.8597C7.96 13.5697 9.13 12.7797 10.67 12.3997L14.13 15.8797H4V5.87969ZM20 5.87969V16.0697L21.3 17.3697C21.72 16.9997 22 16.4797 22 15.8797V5.87969C22 4.76969 21.1 3.87969 20 3.87969H7.8L9.8 5.87969H20ZM12.93 9.00969L15.72 11.7897L17 10.5897L13 6.85969V8.98969L12.93 9.00969Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconStopScreenShare;
