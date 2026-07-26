import React from "react";
import { withIcon } from "../../hoc";

const IconMicExternalOn = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M7.22 7C7.7 6.47 8 5.77 8 5C8 3.34 6.66 2 5 2C3.34 2 2 3.34 2 5C2 5.77 2.3 6.47 2.78 7H7.22Z"
        fill="currentColor"
      />
      <path
        d="M14 2C11.79 2 10 3.79 10 6V18C10 19.1 9.1 20 8 20C6.9 20 6 19.1 6 18H7L8 8H2L3 18H4C4 20.21 5.79 22 8 22C10.21 22 12 20.21 12 18V6C12 4.9 12.9 4 14 4C15.1 4 16 4.9 16 6V22H18V6C18 3.79 16.21 2 14 2ZM5.19 16H4.81L4.21 10H5.79L5.19 16Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconMicExternalOn;
