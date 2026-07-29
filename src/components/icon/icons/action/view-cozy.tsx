import React from "react";
import { withIcon } from "../../hoc";

const IconViewCozy = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M11.25 7.25H7.25V11.25H11.25V7.25Z" fill="currentColor" />
      <path d="M16.75 7.25H12.75V11.25H16.75V7.25Z" fill="currentColor" />
      <path d="M11.25 12.75H7.25V16.75H11.25V12.75Z" fill="currentColor" />
      <path d="M16.75 12.75H12.75V16.75H16.75V12.75Z" fill="currentColor" />
      <path
        d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V6H20V18Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconViewCozy;
