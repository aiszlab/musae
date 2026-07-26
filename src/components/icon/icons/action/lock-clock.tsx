import React from "react";
import { withIcon } from "../../hoc";

const IconLockClock = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M4.5 20V10H16.5V11C17.2 11 17.87 11.1 18.5 11.29V10C18.5 8.9 17.6 8 16.5 8H15.5V6C15.5 3.24 13.26 1 10.5 1C7.74 1 5.5 3.24 5.5 6V8H4.5C3.4 8 2.5 8.9 2.5 10V20C2.5 21.1 3.4 22 4.5 22H10.76C10.34 21.4 10.01 20.72 9.79 20H4.5ZM7.5 6C7.5 4.34 8.84 3 10.5 3C12.16 3 13.5 4.34 13.5 6V8H7.5V6Z"
        fill="currentColor"
      />
      <path
        d="M16.5 13C13.74 13 11.5 15.24 11.5 18C11.5 20.76 13.74 23 16.5 23C19.26 23 21.5 20.76 21.5 18C21.5 15.24 19.26 13 16.5 13ZM18.15 20.35L16 18.2V15H17V17.79L18.85 19.64L18.15 20.35Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconLockClock;
