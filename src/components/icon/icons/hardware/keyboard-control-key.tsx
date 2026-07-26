import React from "react";
import { withIcon } from "../../hoc";

const IconKeyboardControlKey = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M5 14.7949L6.41 16.2049L12 10.6249L17.59 16.2049L19 14.7949L12 7.79492L5 14.7949Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconKeyboardControlKey;
