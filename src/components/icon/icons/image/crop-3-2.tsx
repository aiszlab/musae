import React from "react";
import { withIcon } from "../../hoc";

const IconCrop32 = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M19 6H5C3.9 6 3 6.9 3 8V16C3 17.1 3.9 18 5 18H19C20.1 18 21 17.1 21 16V8C21 6.9 20.1 6 19 6ZM19 16H5V8H19V16Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconCrop32;
