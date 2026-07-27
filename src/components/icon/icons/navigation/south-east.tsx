import React from "react";
import { withIcon } from "../../hoc";

const IconSouthEast = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M19.5 9.5H17.5V16.09L5.91 4.5L4.5 5.91L16.09 17.5H9.5V19.5H19.5V9.5Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconSouthEast;
