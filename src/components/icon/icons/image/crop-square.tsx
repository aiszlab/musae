import React from "react";
import { withIcon } from "../../hoc";

const IconCropSquare = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M18 4H6C4.9 4 4 4.9 4 6V18C4 19.1 4.9 20 6 20H18C19.1 20 20 19.1 20 18V6C20 4.9 19.1 4 18 4ZM18 18H6V6H18V18Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconCropSquare;
