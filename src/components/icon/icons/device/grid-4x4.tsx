import React from "react";
import { withIcon } from "../../hoc";

const Grid4X4 = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.2)">
        <path
          d="M20 5V3H17V0H15V3H11V0H9V3H5V0H3V3H0V5H3V9H0V11H3V15H0V17H3V20H5V17H9V20H11V17H15V20H17V17H20V15H17V11H20V9H17V5H20ZM5 5H9V9H5V5ZM5 15V11H9V15H5ZM15 15H11V11H15V15ZM15 9H11V5H15V9Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Grid4X4;
