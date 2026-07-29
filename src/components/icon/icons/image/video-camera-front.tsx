import React from "react";
import { withIcon } from "../../hoc";

const IconVideoCameraFront = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M18 10.48V6C18 4.9 17.1 4 16 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H16C17.1 20 18 19.1 18 18V13.52L22 17.5V6.5L18 10.48ZM16 18H4V6H16V18Z"
        fill="currentColor"
      />
      <path
        d="M10 12C11.1046 12 12 11.1046 12 10C12 8.89543 11.1046 8 10 8C8.89543 8 8 8.89543 8 10C8 11.1046 8.89543 12 10 12Z"
        fill="currentColor"
      />
      <path
        d="M14 15.43C14 14.62 13.52 13.9 12.78 13.58C11.93 13.21 10.99 13 10 13C9.01 13 8.07 13.21 7.22 13.58C6.48 13.9 6 14.62 6 15.43V16H14V15.43Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconVideoCameraFront;
