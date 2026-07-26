import React from "react";
import { withIcon } from "../../hoc";

const IconAlertSvg5 = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M0 19H22L11 0L0 19ZM12 16H10V14H12V16ZM12 12H10V8H12V12Z" fill="currentColor" />
    </svg>
  );
});

export default IconAlertSvg5;
