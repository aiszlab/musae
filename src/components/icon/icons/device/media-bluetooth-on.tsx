import React from "react";
import { withIcon } from "../../hoc";

const MediaBluetoothOn = withIcon(({ size }) => {
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
          d="M6 0L6.01 10.55C5.41 10.21 4.73 10 4.01 10C1.79 10 0 11.79 0 14C0 16.21 1.79 18 4.01 18C6.23 18 8 16.21 8 14V4H12V0H6ZM18 9.43L14.57 6H13.97V10.55L11.22 7.8L10.37 8.65L13.73 12L10.38 15.35L11.23 16.2L13.98 13.45V18H14.58L18 14.57L15.42 12L18 9.43ZM15.17 8.3L16.3 9.43L15.17 10.56V8.3ZM16.3 14.57L15.17 15.7V13.44L16.3 14.57Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default MediaBluetoothOn;
