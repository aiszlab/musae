import React from "react";
import { withIcon } from "../../hoc";

const IconFreeBreakfast = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M3 19H19V21H3V19ZM19 3H3V13C3 15.21 4.79 17 7 17H13C15.21 17 17 15.21 17 13V10H19C20.11 10 21 9.1 21 8V5C21 3.89 20.11 3 19 3ZM15 13C15 14.1 14.1 15 13 15H7C5.9 15 5 14.1 5 13V5H15V13ZM19 8H17V5H19V8Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconFreeBreakfast;
