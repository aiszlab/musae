import React from "react";
import { withIcon } from "../../hoc";

const ClosedCaptionDisabled = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0.0061, 0) scale(1.2121)">
        <path
          d="M11.61 7.19C11.61 6.64 12.06 6.19 12.61 6.19H15.61C16.16 6.19 16.61 6.64 16.61 7.19V8.19H15.11V7.69H13.11V8.69L11.61 7.19ZM15.11 10.69L16.32 11.9C16.5 11.71 16.61 11.46 16.61 11.19V10.19H15.11V10.69ZM7.44 3.19H17.61V13.36L19.59 15.34C19.59 15.29 19.61 15.24 19.61 15.18V3.19C19.61 2.09 18.71 1.19 17.61 1.19H5.44L7.44 3.19ZM18.39 19.8L15.78 17.19H3.61C2.5 17.19 1.61 16.29 1.61 15.19V3.19C1.61 3.14 1.63 3.09 1.63 3.04L0 1.41L1.41 0L19.79 18.38L18.39 19.8ZM6.11 10.69H8.11V10.19H8.78L6.28 7.69H6.11V10.69ZM13.78 15.19L9.61 11.02V11.19C9.61 11.74 9.16 12.19 8.61 12.19H5.61C5.06 12.19 4.61 11.74 4.61 11.19V7.19C4.61 6.87 4.77 6.6 5.01 6.41L3.61 5.02V15.19H13.78Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default ClosedCaptionDisabled;
