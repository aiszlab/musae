import React from "react";
import { withIcon } from "../../hoc";

const Aod = withIcon(({ size }) => {
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
          d="M12 0.00999999L2 0C0.9 0 0 0.9 0 2V20C0 21.1 0.9 22 2 22H12C13.1 22 14 21.1 14 20V2C14 0.9 13.1 0.00999999 12 0.00999999ZM12 20H2V19H12V20ZM12 17H2V5H12V17ZM12 3H2V2H12V3ZM3 9H11V10.5H3V9ZM4 12H10V13.5H4V12Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Aod;
