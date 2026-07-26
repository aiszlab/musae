import React from "react";
import { withIcon } from "../../hoc";

const IconVideoCameraBack = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M18 8.48V4C18 2.9 17.1 2 16 2H4C2.9 2 2 2.9 2 4V16C2 17.1 2.9 18 4 18H16C17.1 18 18 17.1 18 16V11.52L22 15.5V4.5L18 8.48ZM16 16H4V4H16V16ZM11.62 9.5L9 13L7.38 10.83L5 14H15L11.62 9.5Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconVideoCameraBack;
