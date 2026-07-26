import React from "react";
import { withIcon } from "../../hoc";

const IconLastPage = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M5.79504 7.41L10.385 12L5.79504 16.59L7.20504 18L13.205 12L7.20504 6L5.79504 7.41ZM16.205 6H18.205V18H16.205V6Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconLastPage;
