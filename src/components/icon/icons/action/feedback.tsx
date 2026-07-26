import React from "react";
import { withIcon } from "../../hoc";

const IconFeedback = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M20 2H4C2.9 2 2.01 2.9 2.01 4L2 22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H5.17L4 17.17V4H20V16ZM11 12H13V14H11V12ZM11 6H13V10H11V6Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconFeedback;
