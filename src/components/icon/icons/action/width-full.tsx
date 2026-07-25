import React from "react";
import { withIcon } from "../../hoc";

const WidthFull = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM4 18V6H5V18H4ZM7 18V6H17V18H7ZM20 18H19V6H20V18Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default WidthFull;
