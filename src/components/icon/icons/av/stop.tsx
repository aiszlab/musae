import React from "react";
import { withIcon } from "../../hoc";

const Stop = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(2)">
        <path d="M10 2V10H2V2H10ZM12 0H0V12H12V0Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default Stop;
