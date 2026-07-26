import React from "react";
import { withIcon } from "../../hoc";

const IconTableRows = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 5V8H5V5H19ZM19 10V14H5V10H19ZM5 19V16H19V19H5Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconTableRows;
