import React from "react";
import { withIcon } from "../../hoc";

const IconVilla = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M19 10C17.9 10 17 10.9 17 12H16V3L3 8V21H21V12C21 10.9 20.1 10 19 10ZM5 9.37L14 5.91V12H9V19H5V9.37ZM19 19H16V16H14V19H11V14H19V19Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconVilla;
