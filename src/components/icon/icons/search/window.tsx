import React from "react";
import { withIcon } from "../../hoc";

const IconWindow = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 11H13V5H19V11ZM11 5V11H5V5H11ZM5 13H11V19H5V13ZM13 19V13H19V19H13Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconWindow;
