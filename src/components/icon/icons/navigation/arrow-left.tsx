import React from "react";
import { withIcon } from "../../hoc";

const IconArrowLeft = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M14.5 7L9.5 12L14.5 17V7Z" fill="currentColor" />
    </svg>
  );
});

export default IconArrowLeft;
