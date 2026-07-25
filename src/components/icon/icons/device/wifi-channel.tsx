import React from "react";
import { withIcon } from "../../hoc";

const WifiChannel = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.3333)">
        <path
          d="M13 0C10.49 0 9.23 5.61 8.6 10.57C7.79 7.66 6.61 5 5 5C1.43 5 0 18 0 18H2.01C2.62 12.73 4.01 8.18 5 7.13C5.98 8.18 7.38 12.74 7.99 18H10C10.5 15.47 12 12 13 12C14 12 15.5 15.53 16 18H18C18 18 17.5 0 13 0ZM13 10C12.01 10 11.18 10.62 10.5 11.5C11.07 6.73 12.04 2.88 13 2.06C13.97 2.87 14.91 6.73 15.49 11.49C14.81 10.62 13.98 10 13 10Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default WifiChannel;
