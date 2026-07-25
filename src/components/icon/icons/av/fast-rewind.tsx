import React from "react";
import { withIcon } from "../../hoc";

const FastRewind = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 3.7714) scale(1.3714)">
        <path
          d="M15.5 3.86V8.14L12.47 6L15.5 3.86ZM6.5 3.86V8.14L3.47 6L6.5 3.86ZM17.5 0L9 6L17.5 12V0ZM8.5 0L0 6L8.5 12V0Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default FastRewind;
