import React from "react";
import { withIcon } from "../../hoc";

const IconFormatIndentIncrease = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M3 21H21V19H3V21ZM3 8V16L7 12L3 8ZM11 17H21V15H11V17ZM3 3V5H21V3H3ZM11 9H21V7H11V9ZM11 13H21V11H11V13Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconFormatIndentIncrease;
