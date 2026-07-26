import React from "react";
import { withIcon } from "../../hoc";

const IconAutoAwesomeMosaic = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M3 5V19C3 20.1 3.89 21 5 21H11V3H5C3.89 3 3 3.9 3 5ZM9 19H5V5H9V19Z"
        fill="currentColor"
      />
      <path d="M19 3H13V11H21V5C21 3.9 20.1 3 19 3ZM19 9H15V5H19V9Z" fill="currentColor" />
      <path d="M13 21H19C20.1 21 21 20.1 21 19V13H13V21ZM15 15H19V19H15V15Z" fill="currentColor" />
    </svg>
  );
});

export default IconAutoAwesomeMosaic;
