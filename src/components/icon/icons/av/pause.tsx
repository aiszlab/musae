import React from "react";
import { withIcon } from "../../hoc";

const Pause = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(1.7143, 0) scale(1.7143)">
        <path d="M0 14H4V0H0V14ZM8 0V14H12V0H8Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default Pause;
