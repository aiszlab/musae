import React from "react";
import { withIcon } from "../../hoc";

const Icon1k = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z"
        fill="currentColor"
      />
      <path d="M8.5 15H10V9H7V10.5H8.5V15Z" fill="currentColor" />
      <path
        d="M13.5 12.75L15.25 15H17L14.75 12L17 9H15.25L13.5 11.25V9H12V15H13.5V12.75Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default Icon1k;
