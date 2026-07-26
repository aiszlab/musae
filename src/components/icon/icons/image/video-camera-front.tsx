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
        d="M18 8.48V4C18 2.9 17.1 2 16 2H4C2.9 2 2 2.9 2 4V16C2 17.1 2.9 18 4 18H16C17.1 18 18 17.1 18 16V11.52L22 15.5V4.5L18 8.48ZM16 16H4V4H16V16Z"
        fill="currentColor"
      />
      <path
        d="M10 10C11.1046 10 12 9.1046 12 8C12 6.8954 11.1046 6 10 6C8.8954 6 8 6.8954 8 8C8 9.1046 8.8954 10 10 10Z"
        fill="currentColor"
      />
      <path
        d="M14 13.43C14 12.62 13.52 11.9 12.78 11.58C11.93 11.21 10.99 11 10 11C9.01 11 8.07 11.21 7.22 11.58C6.48 11.9 6 12.62 6 13.43V14H14V13.43Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconVideoCameraFront;
