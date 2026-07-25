import React from "react";
import { withIcon } from "../../hoc";

const SendToMobile = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(2.7273, 0) scale(1.0909)">
        <path
          d="M13 7L17 11L13 15L11.59 13.59L13.17 12H8V10H13.17L11.58 8.41L13 7ZM2 0.00999999L12 0C13.1 0 14 0.9 14 2V6H12V5H2V17H12V16H14V20C14 21.1 13.1 22 12 22H2C0.9 22 0 21.1 0 20V2C0 0.9 0.9 0.00999999 2 0.00999999ZM2 20H12V19H2V20ZM2 3H12V2H2V3Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default SendToMobile;
