import React from "react";
import { withIcon } from "../../hoc";

const BrunchDining = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.2)">
        <path
          d="M0 19.5C0 19.78 0.22 20 0.49 20H13.51C13.78 20 14 19.78 14 19.5V18H0V19.5Z"
          fill="currentColor"
        />
        <path
          d="M13.5 14H9V12H5V14H0.5C0.22 14 0 14.22 0 14.5V16H14V14.5C14 14.22 13.78 14 13.5 14Z"
          fill="currentColor"
        />
        <path
          d="M18.47 13.45C19.46 12.38 20 10.97 20 9.51V0H14V9.47C14 10.95 14.58 12.39 15.6 13.47L16 13.89V20H20V18H18V13.97L18.47 13.45ZM16 2H18V6H16V2ZM17.03 12.07C16.38 11.36 16 10.42 16 9.47V8H18V9.51C18 10.46 17.66 11.36 17.03 12.07Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default BrunchDining;
