import React from "react";
import { withIcon } from "../../hoc";

const FirstPage = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0.3965) scale(1.9339)">
        <path
          d="M12.41 10.59L7.82 6L12.41 1.41L11 0L5 6L11 12L12.41 10.59ZM0 0H2V12H0V0Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default FirstPage;
