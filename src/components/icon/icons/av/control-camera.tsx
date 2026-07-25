import React from "react";
import { withIcon } from "../../hoc";

const ControlCamera = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.2)">
        <path
          d="M3.54 6.46L0 10L3.54 13.54L5.3 11.77L3.54 10L5.3 8.23L3.54 6.46ZM10 16.46L8.23 14.7L6.46 16.46L10 20L13.54 16.46L11.77 14.7L10 16.46ZM16.46 6.46L14.7 8.23L16.46 10L14.7 11.77L16.46 13.54L20 10L16.46 6.46ZM6.46 3.54L8.23 5.3L10 3.54L11.77 5.3L13.54 3.54L10 0L6.46 3.54Z"
          fill="currentColor"
        />
        <path
          d="M10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default ControlCamera;
