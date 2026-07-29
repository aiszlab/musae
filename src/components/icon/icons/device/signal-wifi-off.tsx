import React from "react";
import { withIcon } from "../../hoc";

const IconSignalWifiOff = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M23.64 7.59527C23.19 7.25527 18.71 3.59527 12 3.59527C10.68 3.59527 9.45 3.73527 8.31 3.97527L18.43 14.0953L23.64 7.59527ZM3.41 1.90527L2 3.31527L4.05 5.36527C1.91 6.35527 0.590001 7.41527 0.360001 7.59527L12 22.0953L15.91 17.2253L19.23 20.5453L20.64 19.1353L3.41 1.90527Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconSignalWifiOff;
