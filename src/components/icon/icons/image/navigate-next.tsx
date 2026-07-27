import React from "react";
import { withIcon } from "../../hoc";

const IconNavigateNext = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M7.41 6L6 7.41L10.58 12L6 16.59L7.41 18L13.41 12L7.41 6Z" fill="currentColor" />
    </svg>
  );
});

export default IconNavigateNext;
