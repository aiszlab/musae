import React from "react";
import { withIcon } from "../../hoc";

const IconSouthWest = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M14.5 19.5V17.5H7.91L19.5 5.91L18.09 4.5L6.5 16.09V9.5H4.5V19.5H14.5Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconSouthWest;
