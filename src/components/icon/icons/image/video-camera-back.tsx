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
        d="M18 10.48V6C18 4.9 17.1 4 16 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H16C17.1 20 18 19.1 18 18V13.52L22 17.5V6.5L18 10.48ZM16 18H4V6H16V18ZM11.62 11.5L9 15L7.38 12.83L5 16H15L11.62 11.5Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconVideoCameraBack;
