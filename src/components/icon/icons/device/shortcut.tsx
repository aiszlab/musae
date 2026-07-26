import React from "react";
import { withIcon } from "../../hoc";

const IconShortcut = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M15 5L13.59 6.41L15 7.83L17.17 10H8C5.24 10 3 12.24 3 15V19H5V15C5 13.35 6.35 12 8 12H17.17L13.59 15.58L15 17L21 11L15 5Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconShortcut;
