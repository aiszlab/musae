import React from "react";
import { withIcon } from "../../hoc";

const IconHexagon = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M17.2 3H6.8L1.6 12L6.8 21H17.2L22.4 12L17.2 3ZM16.05 19H7.95L3.91 12L7.95 5H16.04L20.08 12L16.05 19Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconHexagon;
