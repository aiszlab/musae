import React from "react";
import { withIcon } from "../../hoc";

const IconVerticalShades = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M20 19V3H4V19H2V21H22V19H20ZM14 5V19H10V5H14ZM6 5H8V19H6V5ZM16 19V5H18V19H16Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconVerticalShades;
