import React from "react";
import { withIcon } from "../../hoc";

const IconBadge = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M18 12H14V13.5H18V12Z" fill="currentColor" />
      <path d="M18 15H14V16.5H18V15Z" fill="currentColor" />
      <path
        d="M20 7H15V4C15 2.9 14.1 2 13 2H11C9.9 2 9 2.9 9 4V7H4C2.9 7 2 7.9 2 9V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V9C22 7.9 21.1 7 20 7ZM11 4H13V9H11V4ZM20 20H4V9H9C9 10.1 9.9 11 11 11H13C14.1 11 15 10.1 15 9H20V20Z"
        fill="currentColor"
      />
      <path
        d="M9 15C9.82843 15 10.5 14.3284 10.5 13.5C10.5 12.6716 9.82843 12 9 12C8.17157 12 7.5 12.6716 7.5 13.5C7.5 14.3284 8.17157 15 9 15Z"
        fill="currentColor"
      />
      <path
        d="M11.08 16.18C10.44 15.9 9.74 15.75 9 15.75C8.26 15.75 7.56 15.9 6.92 16.18C6.36 16.42 6 16.96 6 17.57V18H12V17.57C12 16.96 11.64 16.42 11.08 16.18Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconBadge;
