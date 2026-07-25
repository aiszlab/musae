import React from "react";
import { withIcon } from "../../hoc";

const Start = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 4.8) scale(1.2)">
        <path
          d="M12.59 1.41L16.17 5H4V7H16.17L12.58 10.59L14 12L20 6L14 0L12.59 1.41ZM0 0V12H2V0H0Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Start;
