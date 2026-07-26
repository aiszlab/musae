import React from "react";
import { withIcon } from "../../hoc";

const IconViewColumn = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M14.67 5V19H9.33V5H14.67ZM15.67 19H21V5H15.67V19ZM8.33 19V5H3V19H8.33Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconViewColumn;
