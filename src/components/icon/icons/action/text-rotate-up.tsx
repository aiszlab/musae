import React from "react";
import { withIcon } from "../../hoc";

const IconTextRotateUp = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M18 4L15 7H17V20H19V7H21L18 4ZM11.8 15.5V10.5L14 9.6V7.5L3 12.25V13.75L14 18.5V16.4L11.8 15.5ZM4.98 13L10 11.13V14.87L4.98 13Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconTextRotateUp;
