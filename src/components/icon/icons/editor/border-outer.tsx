import React from "react";
import { withIcon } from "../../hoc";

const IconBorderOuter = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M13 7H11V9H13V7ZM13 11H11V13H13V11ZM17 11H15V13H17V11ZM3 3V21H21V3H3ZM19 19H5V5H19V19ZM13 15H11V17H13V15ZM9 11H7V13H9V11Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconBorderOuter;
