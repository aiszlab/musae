import React from "react";
import { withIcon } from "../../hoc";

const IconVerticalAlignTop = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M8 11H11V21H13V11H16L12 7L8 11ZM4 3V5H20V3H4Z" fill="currentColor" />
    </svg>
  );
});

export default IconVerticalAlignTop;
