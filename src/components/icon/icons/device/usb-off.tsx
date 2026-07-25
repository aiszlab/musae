import React from "react";
import { withIcon } from "../../hoc";

const UsbOff = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0.4718, 0) scale(1.165)">
        <path
          d="M13.61 6H17.61V10H16.61V12C16.61 12.34 16.53 12.66 16.38 12.94L14.61 11.17V10H13.61V6ZM9.61 6.17L11.61 8.17V4H13.61L10.61 0L7.61 4H9.61V6.17ZM11.61 14V16.28C12.21 16.62 12.61 17.26 12.61 18C12.61 19.1 11.71 20 10.61 20C9.51 20 8.61 19.1 8.61 18C8.61 17.26 9.01 16.63 9.61 16.28V14H6.61C5.5 14 4.61 13.11 4.61 12V9.72C4.01 9.38 3.61 8.74 3.61 8C3.61 7.41 3.87 6.87 4.29 6.51L0 2.22L1.41 0.81L19.79 19.19L18.38 20.6L11.78 14H11.61ZM9.61 12V11.83L7.1 9.32C6.96 9.48 6.79 9.61 6.61 9.72V12H9.61Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default UsbOff;
