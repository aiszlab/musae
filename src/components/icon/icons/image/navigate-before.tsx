import React from "react";
import { withIcon } from "../../hoc";

const IconNavigateBefore = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M13.41 7.41L12 6L6 12L12 18L13.41 16.59L8.83 12L13.41 7.41Z" fill="currentColor" />
    </svg>
  );
});

export default IconNavigateBefore;
