import React from "react";
import { withIcon } from "../../hoc";

const IconSquare = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M3 3V21H21V3H3ZM19 19H5V5H19V19Z" fill="currentColor" />
    </svg>
  );
});

export default IconSquare;
