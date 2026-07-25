import React from "react";
import { withIcon } from "../../hoc";

const SecurityUpdate = withIcon(({ size }) => {
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
          d="M12 0.00999999L2 0C0.9 0 0 0.9 0 2V20C0 21.1 0.9 22 2 22H12C13.1 22 14 21.1 14 20V2C14 0.9 13.1 0.00999999 12 0.00999999ZM12 20H2V19H12V20ZM12 17H2V5H12V17ZM2 3V2H12V3H2ZM11 11L7 15L3 11L4.41 9.59L6 11.17V7H8V11.17L9.59 9.58L11 11Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default SecurityUpdate;
