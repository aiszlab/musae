import React from "react";
import { withIcon } from "../../hoc";

const IconVerticalShadesClosed = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M20 19V3H4V19H2V21H22V19H20ZM13 5H14.5V19H13V5ZM11 19H9.5V5H11V19ZM6 5H7.5V19H6V5ZM16.5 19V5H18V19H16.5Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconVerticalShadesClosed;
