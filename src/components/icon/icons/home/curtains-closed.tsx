import React from "react";
import { withIcon } from "../../hoc";

const IconCurtainsClosed = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M20 19V3H4V19H2V21H22V19H20ZM13 5V19H11V5H13ZM6 5H9V19H6V5ZM15 19V5H18V19H15Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconCurtainsClosed;
