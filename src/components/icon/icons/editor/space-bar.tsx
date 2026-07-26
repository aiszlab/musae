import React from "react";
import { withIcon } from "../../hoc";

const IconSpaceBar = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M18 9V13H6V9H4V15H20V9H18Z" fill="currentColor" />
    </svg>
  );
});

export default IconSpaceBar;
