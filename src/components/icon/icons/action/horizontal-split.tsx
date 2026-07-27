import React from "react";
import { withIcon } from "../../hoc";

const IconHorizontalSplit = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M19 15V17H5V15H19ZM21 5H3V7H21V5ZM21 9H3V11H21V9ZM21 13H3V19H21V13Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconHorizontalSplit;
