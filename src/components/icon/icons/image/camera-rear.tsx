import React from "react";
import { withIcon } from "../../hoc";

const IconCameraRear = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M0 20V22H5V24L8 21L5 18V20H0ZM9 20H14V22H9V20ZM12 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H12C13.1 18 14 17.1 14 16V2C14 0.9 13.1 0 12 0ZM12 16H2V2H12V16ZM7 7C8.1 7 9 6.1 8.99 5C8.99 3.9 8.09 3 6.99 3C5.89 3 5 3.9 5 5C5 6.1 5.89 7 7 7Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconCameraRear;
