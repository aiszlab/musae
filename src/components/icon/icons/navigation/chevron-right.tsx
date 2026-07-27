import React from "react";
import { withIcon } from "../../hoc";

const IconChevronRight = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M9.70504 6L8.29504 7.41L12.875 12L8.29504 16.59L9.70504 18L15.705 12L9.70504 6Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconChevronRight;
