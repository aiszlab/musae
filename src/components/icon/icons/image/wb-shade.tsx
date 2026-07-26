import React from "react";
import { withIcon } from "../../hoc";

const IconWbShade = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M14 10V12.5L19.5 18H22L14 10ZM14 18H17L14 15V18ZM8 2L2 8H4V18H12V8H14L8 2ZM9 12H7V8H9V12Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconWbShade;
