import React from "react";
import { withIcon } from "../../hoc";

const HdrOff = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.1934)">
        <path
          d="M16.05 12.51V10.51H17.15L18.05 12.51H19.55L18.65 10.41C19.15 10.11 19.55 9.61 19.55 9.01V8.01C19.55 7.21 18.85 6.51 18.05 6.51H14.55V11.37L15.69 12.51H16.05ZM16.05 8.01H18.05V9.01H16.05V8.01ZM11.55 8.01V8.37L13.05 9.87V8.01C13.05 7.21 12.35 6.51 11.55 6.51H9.69L11.19 8.01H11.55ZM1.06 0L0 1.06L5.45 6.51H5.05V8.51H3.05V6.51H1.55V12.51H3.05V10.01H5.05V12.51H6.55V7.61L8.05 9.11V12.51H11.45L19.05 20.11L20.11 19.05L1.06 0Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default HdrOff;
