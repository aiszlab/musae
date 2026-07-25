import React from "react";
import { withIcon } from "../../hoc";

const VerticalSplit = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M3 15H5V17H3V15ZM3 11H5V13H3V11ZM3 7H5V9H3V7ZM19 3H13V21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM3 19H5V21H3V19ZM11 3H5V21H11V3Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default VerticalSplit;
