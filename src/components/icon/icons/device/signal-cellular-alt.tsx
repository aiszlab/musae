import React from "react";
import { withIcon } from "../../hoc";

const IconSignalCellularAlt = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M16.5 4H19.5V20H16.5V4ZM4.5 14H7.5V20H4.5V14ZM10.5 9H13.5V20H10.5V9Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconSignalCellularAlt;
