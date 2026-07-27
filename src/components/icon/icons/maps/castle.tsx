import React from "react";
import { withIcon } from "../../hoc";

const IconCastle = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M21 9V11H19V3H17V5H15V3H13V5H11V3H9V5H7V3H5V11H3V9H1V21H10V18C10 16.9 10.9 16 12 16C13.1 16 14 16.9 14 18V21H23V9H21ZM21 19H16V18C16 15.79 14.21 14 12 14C9.79 14 8 15.79 8 18V19H3V13H7V7H17V13H21V19Z"
        fill="currentColor"
      />
      <path d="M11 9H9V12H11V9Z" fill="currentColor" />
      <path d="M15 9H13V12H15V9Z" fill="currentColor" />
    </svg>
  );
});

export default IconCastle;
