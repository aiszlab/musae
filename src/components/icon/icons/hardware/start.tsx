import React from "react";
import { withIcon } from "../../hoc";

const IconStart = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M14.59 7.41L18.17 11H6V13H18.17L14.58 16.59L16 18L22 12L16 6L14.59 7.41ZM2 6V18H4V6H2Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconStart;
