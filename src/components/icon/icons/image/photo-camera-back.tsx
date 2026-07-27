import React from "react";
import { withIcon } from "../../hoc";

const IconPhotoCameraBack = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M20 4H16.83L15 2H9L7.17 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V6H8.05L9.88 4H14.12L15.95 6H20V18Z"
        fill="currentColor"
      />
      <path d="M11.25 15L9 12L6 16H18L14.25 11L11.25 15Z" fill="currentColor" />
    </svg>
  );
});

export default IconPhotoCameraBack;
