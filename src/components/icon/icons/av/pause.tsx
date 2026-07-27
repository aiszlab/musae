import React from "react";
import { withIcon } from "../../hoc";

const IconPause = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M6 19H10V5H6V19ZM14 5V19H18V5H14Z" fill="currentColor" />
    </svg>
  );
});

export default IconPause;
