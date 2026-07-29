import React from "react";
import { withIcon } from "../../hoc";

const IconViewKanban = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M9 7H7V17H9V7Z" fill="currentColor" />
      <path d="M13 7H11V12H13V7Z" fill="currentColor" />
      <path d="M17 7H15V15H17V7Z" fill="currentColor" />
      <path
        d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconViewKanban;
