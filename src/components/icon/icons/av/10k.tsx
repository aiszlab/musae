import React from "react";
import { withIcon } from "../../hoc";

const Icon10k = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 9V15V19H5V10.5H6V15H7.5V9H5V5H19V9Z"
        fill="currentColor"
      />
      <path
        d="M15.5 11.25V9H14V15H15.5V12.75L17.25 15H19L16.75 12L19 9H17.25L15.5 11.25Z"
        fill="currentColor"
      />
      <path
        d="M9.5 15H12C12.55 15 13 14.55 13 14V10C13 9.45 12.55 9 12 9H9.5C8.95 9 8.5 9.45 8.5 10V14C8.5 14.55 8.95 15 9.5 15ZM10 10.5H11.5V13.5H10V10.5Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default Icon10k;
