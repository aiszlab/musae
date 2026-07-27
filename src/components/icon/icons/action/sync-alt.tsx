import React from "react";
import { withIcon } from "../../hoc";

const IconSyncAlt = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M7.41 13.41L6 12L2 16L6 20L7.41 18.59L5.83 17H21V15H5.83L7.41 13.41Z"
        fill="currentColor"
      />
      <path
        d="M16.59 10.59L18 12L22 8L18 4L16.59 5.41L18.17 7H3V9H18.17L16.59 10.59Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconSyncAlt;
