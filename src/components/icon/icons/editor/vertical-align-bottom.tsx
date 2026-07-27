import React from "react";
import { withIcon } from "../../hoc";

const IconVerticalAlignBottom = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M16 13H13V3H11V13H8L12 17L16 13ZM4 19V21H20V19H4Z" fill="currentColor" />
    </svg>
  );
});

export default IconVerticalAlignBottom;
