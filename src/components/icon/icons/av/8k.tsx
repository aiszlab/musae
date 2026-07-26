import React from "react";
import { withIcon } from "../../hoc";

const Icon8k = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M7.5 15H10C10.55 15 11 14.55 11 14V10C11 9.45 10.55 9 10 9H7.5C6.95 9 6.5 9.45 6.5 10V14C6.5 14.55 6.95 15 7.5 15ZM8 10H9.5V11.5H8V10ZM8 12.5H9.5V14H8V12.5Z"
        fill="currentColor"
      />
      <path
        d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z"
        fill="currentColor"
      />
      <path
        d="M14.5 12.75L16.25 15H18L15.75 12L18 9H16.25L14.5 11.25V9H13V15H14.5V12.75Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default Icon8k;
