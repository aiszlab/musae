import React from "react";
import { withIcon } from "../../hoc";

const IconClearAll = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M5 13H19V11H5V13ZM3 17H17V15H3V17ZM7 7V9H21V7H7Z" fill="currentColor" />
    </svg>
  );
});

export default IconClearAll;
