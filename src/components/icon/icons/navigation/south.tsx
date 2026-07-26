import React from "react";
import { withIcon } from "../../hoc";

const IconSouth = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M19 15L17.59 13.59L13 18.17V2H11V18.17L6.41 13.58L5 15L12 22L19 15Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconSouth;
