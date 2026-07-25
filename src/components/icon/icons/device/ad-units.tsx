import React from "react";
import { withIcon } from "../../hoc";

const AdUnits = withIcon(({ size }) => {
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
          d="M12 0H2C0.9 0 0 0.9 0 2V20C0 21.1 0.9 22 2 22H12C13.1 22 14 21.1 14 20V2C14 0.9 13.1 0 12 0ZM2 3V2H12V3H2ZM2 17V5H12V17H2ZM2 20V19H12V20H2Z"
          fill="currentColor"
        />
        <path d="M11 6H3V8H11V6Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default AdUnits;
