import React from "react";
import { withIcon } from "../../hoc";

const IconTitle = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M5 4.5V7.5H10.5V19.5H13.5V7.5H19V4.5H5Z" fill="currentColor" />
    </svg>
  );
});

export default IconTitle;
