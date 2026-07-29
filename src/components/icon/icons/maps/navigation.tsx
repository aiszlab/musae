import React from "react";
import { withIcon } from "../../hoc";

const IconNavigation = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 7.77L16.28 18.2L12.81 16.67L12 16.31L11.19 16.67L7.72 18.2L12 7.77ZM12 2.5L4.5 20.79L5.21 21.5L12 18.5L18.79 21.5L19.5 20.79L12 2.5Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconNavigation;
