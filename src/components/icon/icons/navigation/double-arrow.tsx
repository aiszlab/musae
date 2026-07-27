import React from "react";
import { withIcon } from "../../hoc";

const IconDoubleArrow = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M15.25 5H10.75L15.75 12L10.75 19H15.25L20.25 12L15.25 5Z" fill="currentColor" />
      <path d="M8.25 5H3.75L8.75 12L3.75 19H8.25L13.25 12L8.25 5Z" fill="currentColor" />
    </svg>
  );
});

export default IconDoubleArrow;
