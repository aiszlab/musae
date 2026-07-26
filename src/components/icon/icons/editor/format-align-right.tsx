import React from "react";
import { withIcon } from "../../hoc";

const IconFormatAlignRight = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M3 21H21V19H3V21ZM9 17H21V15H9V17ZM3 13H21V11H3V13ZM9 9H21V7H9V9ZM3 3V5H21V3H3Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconFormatAlignRight;
