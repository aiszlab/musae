import React from "react";
import { withIcon } from "../../hoc";

const DeviceHub = withIcon(({ size }) => {
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
          d="M14 13L10 9V5.82C11.16 5.4 12 4.3 12 3C12 1.34 10.66 0 9 0C7.34 0 6 1.34 6 3C6 4.3 6.84 5.4 8 5.82V9L4 13H0V18H5V14.95L9 10.75L13 14.95V18H18V13H14Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default DeviceHub;
