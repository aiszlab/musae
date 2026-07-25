import React from "react";
import { withIcon } from "../../hoc";

const BluetoothConnected = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(1.2, 0) scale(1.2)">
        <path
          d="M4 10L2 8L0 10L2 12L4 10ZM14.71 5.71L9 0H8V7.59L3.41 3L2 4.41L7.59 10L2 15.59L3.41 17L8 12.41V20H9L14.71 14.29L10.41 10L14.71 5.71ZM10 3.83L11.88 5.71L10 7.59V3.83ZM11.88 14.29L10 16.17V12.41L11.88 14.29ZM16 8L14 10L16 12L18 10L16 8Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default BluetoothConnected;
