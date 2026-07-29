import React from "react";
import { withIcon } from "../../hoc";

const IconVerticalSplit = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M3 13H11V15H3V13ZM3 17H11V19H3V17ZM3 9H11V11H3V9ZM3 5H11V7H3V5ZM19 7V17H15V7H19ZM21 5H13V19H21V5Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconVerticalSplit;
