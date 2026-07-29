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
        d="M3 5V19H21V5H3ZM8.33 17H5V7H8.33V17ZM13.67 17H10.34V7H13.67V17ZM19 17H15.67V7H19V17Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconViewColumn;
