import React from "react";
import { withIcon } from "../../hoc";

const IconUpgrade = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M16 18V20H8V18H16ZM11 7.83V16H13V7.83L15.59 10.41L17 9L12 4L7 9L8.41 10.41L11 7.83Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconUpgrade;
