import React from "react";
import { withIcon } from "../../hoc";

const IconViewComfyAlt = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M11 7H7V11H11V7Z" fill="currentColor" />
      <path d="M17 7H13V11H17V7Z" fill="currentColor" />
      <path d="M11 13H7V17H11V13Z" fill="currentColor" />
      <path d="M17 13H13V17H17V13Z" fill="currentColor" />
      <path
        d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V6H20V18Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconViewComfyAlt;
