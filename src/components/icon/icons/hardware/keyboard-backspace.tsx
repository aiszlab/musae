import React from "react";
import { withIcon } from "../../hoc";

const IconKeyboardBackspace = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M21 11H6.83L10.41 7.41L9 6L3 12L9 18L10.41 16.59L6.83 13H21V11Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconKeyboardBackspace;
