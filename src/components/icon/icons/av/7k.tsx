import React from "react";
import { withIcon } from "../../hoc";

const Icon7k = withIcon(({ size }) => {
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
      <path
        d="M7.75 15H9.5L10.96 10.29C11.15 9.65 10.67 9 10 9H6.5V10.5H9.13L7.75 15Z"
        fill="currentColor"
      />
      <path
        d="M14.5 12.75L16.25 15H18L15.75 12L18 9H16.25L14.5 11.25V9H13V15H14.5V12.75Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default Icon7k;
