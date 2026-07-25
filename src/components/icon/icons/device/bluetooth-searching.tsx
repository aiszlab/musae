import React from "react";
import { withIcon } from "../../hoc";

const BluetoothSearching = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(1.194, 0) scale(1.2)">
        <path
          d="M11.24 10.01L13.56 12.33C13.84 11.61 14 10.82 14 10C14 9.18 13.84 8.41 13.57 7.69L11.24 10.01ZM16.53 4.71L15.27 5.97C15.9 7.18 16.25 8.54 16.25 9.99C16.25 11.44 15.89 12.81 15.27 14.01L16.47 15.21C17.44 13.67 18.01 11.85 18.01 9.9C18 8.01 17.46 6.23 16.53 4.71ZM12.71 5.71L7 0H6V7.59L1.41 3L0 4.41L5.59 10L0 15.59L1.41 17L6 12.41V20H7L12.71 14.29L8.41 10L12.71 5.71ZM8 3.83L9.88 5.71L8 7.59V3.83ZM9.88 14.29L8 16.17V12.41L9.88 14.29Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default BluetoothSearching;
