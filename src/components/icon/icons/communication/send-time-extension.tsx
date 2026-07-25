import React from "react";
import { withIcon } from "../../hoc";

const SendTimeExtension = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0.2927, 0) scale(1.1707)">
        <path
          d="M15 4.5V10.76L17 11.76V4.5C17 3.4 16.1 2.5 15 2.5H11C11 1.12 9.88 0 8.5 0C7.12 0 6 1.12 6 2.5H2.01C0.91 2.5 0.00999999 3.4 0.00999999 4.5V8.3C2.7 8.3 3 10.46 3 11C3 11.54 2.71 13.7 0 13.7V17.5C0 18.6 0.9 19.5 2 19.5H5.8C5.8 17.34 7.17 16.72 8 16.56V14.53C6.57 14.7 4.85 15.57 4.13 17.5H2V15.37C4.17 14.57 5 12.5 5 11C5 9.51 4.17 7.44 2.01 6.63V4.5H8V2.5C8 2.22 8.22 2 8.5 2C8.78 2 9 2.22 9 2.5V4.5H15Z"
          fill="currentColor"
        />
        <path d="M10 10.5V14.5L14 15.5L10 16.5V20.5L20 15.5L10 10.5Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default SendTimeExtension;
