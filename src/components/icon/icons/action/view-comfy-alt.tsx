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
      <path
        fill="currentColor"
        d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V6H20V18Z"
      />
      <path
        d="M11 8H13V10H11V8ZM7 8H9V10H7V8ZM15 8H17V10H15V8ZM11 14H13V16H11V14ZM7 14H9V16H7V14ZM15 14H17V16H15V14Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconViewComfyAlt;
