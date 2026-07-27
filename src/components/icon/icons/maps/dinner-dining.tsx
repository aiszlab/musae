import React from "react";
import { withIcon } from "../../hoc";

const IconDinnerDining = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M2 19L4 21H20L22 19H2Z" fill="currentColor" />
      <path
        d="M3 18H19.97C20.26 14.74 17.69 12 14.49 12C12.14 12 10.14 13.48 9.35 15.55C8.94 15.32 8.48 15.17 8 15.08V9H9.75C10.99 9 12 7.99 12 6.75H21V5.25H12C12 4.01 10.99 3 9.75 3H3V4.5H4V5.25H3V6.75H4V7.5H3V9H4V16.39C3.56 16.85 3.22 17.39 3 18ZM14.5 14C15.49 14 16.41 14.4 17.08 15.14C17.32 15.4 17.52 15.69 17.66 16H11.34C11.92 14.79 13.15 14 14.5 14ZM8 4.5H10V5.25H8V4.5ZM8 6.75H10V7.5H8V6.75ZM5.5 4.5H6.5V5.25H5.5V4.5ZM5.5 6.75H6.5V7.5H5.5V6.75ZM5.5 9H6.5V15.06C6.15 15.12 5.82 15.23 5.5 15.36V9Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconDinnerDining;
