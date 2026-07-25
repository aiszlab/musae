import React from "react";
import { withIcon } from "../../hoc";

const BrowserNotSupported = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0.1953) scale(1.2598)">
        <path
          d="M17.05 2.68V13.18L19 15.13C19.03 14.98 19.05 14.83 19.05 14.68V2.68C19.05 1.58 18.15 0.68 17.05 0.68H4.55L6.55 2.68H17.05Z"
          fill="currentColor"
        />
        <path
          d="M1.27 0L0 1.27L1.05 2.32V14.68C1.05 15.78 1.95 16.68 3.05 16.68H15.41L17.47 18.74L18.74 17.47L1.27 0ZM3.05 14.68V4.32L13.41 14.68H3.05Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default BrowserNotSupported;
