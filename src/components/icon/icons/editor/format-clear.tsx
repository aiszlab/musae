import React from "react";
import { withIcon } from "../../hoc";

const FormatClear = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 1.24) scale(1.3333)">
        <path
          d="M18 3.14V0.14H4.39L7.39 3.14H9.22L8.67 4.42L10.76 6.52L12.21 3.14H18ZM1.41 0L0 1.41L6.97 8.38L4.5 14.14H7.5L9.07 10.48L14.73 16.14L16.14 14.73L1.41 0Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default FormatClear;
