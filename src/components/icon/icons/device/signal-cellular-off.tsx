import React from "react";
import { withIcon } from "../../hoc";

const SignalCellularOff = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0.4691, 0) scale(1.0909)">
        <path
          d="M20 0L11.69 8.31L20 16.61V0ZM3.91 3.36L2.5 4.77L8.86 11.14L0 20H17.73L19.73 22L21.14 20.59L3.91 3.36Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default SignalCellularOff;
