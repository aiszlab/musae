import React from "react";
import { withIcon } from "../../hoc";

const IconArrowUpward = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M4 12L5.41 13.41L11 7.83V20H13V7.83L18.58 13.42L20 12L12 4L4 12Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconArrowUpward;
