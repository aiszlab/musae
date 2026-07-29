import React from "react";
import { withIcon } from "../../hoc";

const IconTransitEnterexit = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M16 18H6V8H9V12.77L15.98 6L18 8.03L11.15 15H16V18Z" fill="currentColor" />
    </svg>
  );
});

export default IconTransitEnterexit;
