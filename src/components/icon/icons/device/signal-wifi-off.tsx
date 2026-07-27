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
        d="M23.64 7.595C23.19 7.255 18.71 3.595 12 3.595C10.68 3.595 9.45 3.735 8.31 3.975L18.43 14.095L23.64 7.595ZM3.41 1.905L2 3.315L4.05 5.365C1.91 6.355 0.59 7.415 0.36 7.595L12 22.095L15.91 17.225L19.23 20.545L20.64 19.135L3.41 1.905Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconSignalWifiOff;
