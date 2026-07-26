import React from "react";
import { withIcon } from "../../hoc";

const Icon4kPlus = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 11.5H17.5V10H16.5V11.5H15V12.5H16.5V14H17.5V12.5H19V19H5V5H19V11.5Z"
        fill="currentColor"
      />
      <path d="M8.5 15H10V13.5H11V12H10V9H8.5V12H7V9H5.5V13.5H8.5V15Z" fill="currentColor" />
      <path
        d="M13 12.75L14.75 15H16.5L14.25 12L16.5 9H14.75L13 11.25V9H11.5V15H13V12.75Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default Icon4kPlus;
