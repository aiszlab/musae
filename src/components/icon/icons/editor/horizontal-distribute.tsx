import React from "react";
import { withIcon } from "../../hoc";

const IconHorizontalDistribute = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M4 22H2V2H4V22ZM22 2H20V22H22V2ZM13.5 7H10.5V17H13.5V7Z" fill="currentColor" />
    </svg>
  );
});

export default IconHorizontalDistribute;
