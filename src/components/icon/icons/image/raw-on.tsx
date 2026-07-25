import React from "react";
import { withIcon } from "../../hoc";

const RawOn = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 8.1039) scale(1.2987)">
        <path
          d="M3.5 0H0V6H1.5V4H2.6L3.5 6H5L4.1 3.9C4.6 3.6 5 3.1 5 2.5V1.5C5 0.7 4.3 0 3.5 0ZM3.5 2.5H1.5V1.5H3.5V2.5Z"
          fill="currentColor"
        />
        <path
          d="M7.25 0L5.75 6H7.25L7.63 4.5H9.38L9.75 6H11.25L9.75 0H7.25ZM8 3L8.25 2H8.75L9 3H8Z"
          fill="currentColor"
        />
        <path
          d="M16.98 0L16.24 3L15.5 0H13.98L13.24 3L12.5 0H11L12.5 6H13.98L14.74 2.96L15.5 6H16.98L18.48 0H16.98Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default RawOn;
