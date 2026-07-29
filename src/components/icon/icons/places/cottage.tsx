import React from "react";
import { withIcon } from "../../hoc";

const IconCottage = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 4L6 8.58V7H4V10.11L1 12.4L2.21 13.99L4 12.62V22H20V12.62L21.79 13.98L23 12.4L12 4ZM18 20H13V16H11V20H6V11.1L12 6.52L18 11.1V20ZM10 2C10 3.66 8.66 5 7 5C6.45 5 6 5.45 6 6H4C4 4.34 5.34 3 7 3C7.55 3 8 2.55 8 2H10Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconCottage;
