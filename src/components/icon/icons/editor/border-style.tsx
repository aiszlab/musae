import React from "react";
import { withIcon } from "../../hoc";

const IconBorderStyle = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M15 21H17V19H15V21ZM19 21H21V19H19V21ZM7 21H9V19H7V21ZM11 21H13V19H11V21ZM19 17H21V15H19V17ZM19 13H21V11H19V13ZM3 3V21H5V5H21V3H3ZM19 9H21V7H19V9Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconBorderStyle;
