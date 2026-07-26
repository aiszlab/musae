import React from "react";
import { withIcon } from "../../hoc";

const IconEast = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M15 5L13.59 6.41L18.17 11H2V13H18.17L13.58 17.59L15 19L22 12L15 5Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconEast;
