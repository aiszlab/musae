import React from "react";
import { withIcon } from "../../hoc";

const IconDragHandle = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M20 9H4V11H20V9ZM4 15H20V13H4V15Z" fill="currentColor" />
    </svg>
  );
});

export default IconDragHandle;
