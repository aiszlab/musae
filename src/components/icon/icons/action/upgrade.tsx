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
      <path d="M16 18V20H8V18H16ZM11 7.99V16H13V7.99H16L12 4L8 7.99H11Z" fill="currentColor" />
    </svg>
  );
});

export default IconUpgrade;
