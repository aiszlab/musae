import React from "react";
import { withIcon } from "../../hoc";

const IconKeyboardReturn = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M19.5 7V11H6.33L9.91 7.41L8.5 6L2.5 12L8.5 18L9.91 16.59L6.33 13H21.5V7H19.5Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconKeyboardReturn;
