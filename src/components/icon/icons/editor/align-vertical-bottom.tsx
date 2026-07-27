import React from "react";
import { withIcon } from "../../hoc";

const IconAlignVerticalBottom = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M22 22H2V20H22V22ZM10 2H7V18H10V2ZM17 8H14V18H17V8Z" fill="currentColor" />
    </svg>
  );
});

export default IconAlignVerticalBottom;
