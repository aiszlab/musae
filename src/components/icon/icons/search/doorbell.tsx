import React from "react";
import { withIcon } from "../../hoc";

const IconDoorbell = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M11 16.5H13C13 17.05 12.55 17.5 12 17.5C11.45 17.5 11 17.05 11 16.5ZM15 15V12.66C15 11.12 14.19 9.84 12.75 9.5V9.25C12.75 8.84 12.41 8.5 12 8.5C11.59 8.5 11.25 8.84 11.25 9.25V9.5C9.82 9.84 9 11.12 9 12.66V15H8V16H16V15H15ZM12 5.5L6 10V19H18V10L12 5.5ZM12 3L20 9V21H4V9L12 3Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconDoorbell;
