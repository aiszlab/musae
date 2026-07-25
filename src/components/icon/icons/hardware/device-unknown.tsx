import React from "react";
import { withIcon } from "../../hoc";

const DeviceUnknown = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(4.3636, 0) scale(1.0909)">
        <path
          d="M12 0H2C0.9 0 0 0.9 0 2V20C0 21.1 0.9 22 2 22H12C13.1 22 14 21.1 14 20V2C14 0.9 13.1 0 12 0ZM12 18H2V4H12V18ZM7 5.72C5.04 5.72 3.5 7.24 3.5 9.19H5.25C5.25 8.26 6.07 7.44 7 7.44C7.93 7.44 8.75 8.26 8.75 9.19C8.75 10.94 6.12 10.76 6.12 13.64H7.88C7.88 11.68 10.5 11.45 10.5 9.19C10.5 7.23 8.96 5.72 7 5.72ZM6 15H8V17H6V15Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default DeviceUnknown;
