import React from "react";
import { withIcon } from "../../hoc";

const RawOff = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0.1732) scale(1.1946)">
        <path
          d="M15.76 11.51L16.35 9.15L17.11 12.19H18.59L20.09 6.19H18.59L17.85 9.19L17.11 6.19H15.59L14.85 9.19L14.11 6.19H12.61L13.33 9.09L15.76 11.51Z"
          fill="currentColor"
        />
        <path
          d="M0 1.41L4.78 6.19H1.61V12.19H3.11V10.19H4.21L5.11 12.19H6.61L5.71 10.09C6.21 9.79 6.61 9.29 6.61 8.69V8.02L8.04 9.45L7.36 12.19H8.86L9.24 10.69H9.28L18.39 19.8L19.8 18.39L1.42 0L0 1.41ZM5.11 8.69H3.11V7.69H5.11V8.69Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default RawOff;
