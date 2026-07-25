import React from "react";
import { withIcon } from "../../hoc";

const PhoneAndroid = withIcon(({ size }) => {
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
          d="M11 0H3C1.34 0 0 1.34 0 3V19C0 20.66 1.34 22 3 22H11C12.66 22 14 20.66 14 19V3C14 1.34 12.66 0 11 0ZM12 17H2V3H12V17ZM9 20H5V19H9V20Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default PhoneAndroid;
