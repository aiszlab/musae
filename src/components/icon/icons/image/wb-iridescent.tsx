import React from "react";
import { withIcon } from "../../hoc";

const WbIridescent = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(2.7764, 0) scale(1.0909)">
        <path
          d="M1.45 14H15.45V8H1.45V14ZM3.45 10H13.45V12H3.45V10ZM7.45 0H9.45V3H7.45V0ZM16.91 4.01L15.49 2.6L13.7 4.39L15.11 5.8L16.91 4.01ZM7.45 19H9.45V22H7.45V19ZM13.69 17.71L15.48 19.51L16.9 18.09L15.1 16.3L13.69 17.71ZM1.41 2.595L3.198 4.385L1.79 5.79L0.00300002 4.003L1.41 2.595ZM0 18.08L1.41 19.5L3.2 17.7L1.79 16.29L0 18.08Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default WbIridescent;
