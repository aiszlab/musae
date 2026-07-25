import React from "react";
import { withIcon } from "../../hoc";

const SignalCellularAlt = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0.75, 0) scale(1.5)">
        <path d="M12 0H15V16H12V0ZM0 10H3V16H0V10ZM6 5H9V16H6V5Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default SignalCellularAlt;
