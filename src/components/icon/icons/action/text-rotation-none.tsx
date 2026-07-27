import React from "react";
import { withIcon } from "../../hoc";

const IconTextRotationNone = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M20 18L17 15V17H4V19H17V21L20 18ZM8.5 11.8H13.5L14.4 14H16.5L11.75 3H10.25L5.5 14H7.6L8.5 11.8ZM11 4.98L12.87 10H9.13L11 4.98Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconTextRotationNone;
