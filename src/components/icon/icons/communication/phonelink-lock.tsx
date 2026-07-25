import React from "react";
import { withIcon } from "../../hoc";

const PhonelinkLock = withIcon(({ size }) => {
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
          d="M15 0H5C3.9 0 3 0.9 3 2V5H5V3H15V19H5V17H3V20C3 21.1 3.9 22 5 22H15C16.1 22 17 21.1 17 20V2C17 0.9 16.1 0 15 0ZM6.8 10V8.5C6.8 7.1 5.4 6 4 6C2.6 6 1.2 7.1 1.2 8.5V10C0.6 10 0 10.6 0 11.2V14.7C0 15.4 0.6 16 1.2 16H6.7C7.4 16 8 15.4 8 14.8V11.3C8 10.6 7.4 10 6.8 10ZM5.5 10H2.5V8.5C2.5 7.7 3.2 7.2 4 7.2C4.8 7.2 5.5 7.7 5.5 8.5V10Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default PhonelinkLock;
