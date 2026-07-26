import React from "react";
import { withIcon } from "../../hoc";

const IconShortText = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M4 9H20V11H4V9ZM4 13H14V15H4V13Z" fill="currentColor" />
    </svg>
  );
});

export default IconShortText;
