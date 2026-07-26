import React from "react";
import { withIcon } from "../../hoc";

const IconViewArray = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M21 5H17V19H21V5ZM15 5H9V19H15V5ZM7 19H3V5H7V19Z" fill="currentColor" />
    </svg>
  );
});

export default IconViewArray;
