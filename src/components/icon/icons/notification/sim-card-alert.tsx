import React from "react";
import { withIcon } from "../../hoc";

const IconSimCardAlert = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M18 2H10L4.02 8L4 20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM18 20H6V8.83L10.83 4H18V20Z"
        fill="currentColor"
      />
      <path d="M13 15H11V17H13V15Z" fill="currentColor" />
      <path d="M13 8H11V13H13V8Z" fill="currentColor" />
    </svg>
  );
});

export default IconSimCardAlert;
