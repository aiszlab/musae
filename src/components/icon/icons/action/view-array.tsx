import React from "react";
import { withIcon } from "../../hoc";

const IconViewArray = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M15 7V17H9V7H15ZM21 5H18V19H21V5ZM17 5H7V19H17V5ZM6 5H3V19H6V5Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconViewArray;
