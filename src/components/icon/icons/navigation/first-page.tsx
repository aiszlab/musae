import React from "react";
import { withIcon } from "../../hoc";

const IconFirstPage = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M18.205 16.59L13.615 12L18.205 7.41L16.795 6L10.795 12L16.795 18L18.205 16.59ZM5.79504 6H7.79504V18H5.79504V6Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconFirstPage;
