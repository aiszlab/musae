import React from "react";
import { withIcon } from "../../hoc";

const IconGrading = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M4 7H20V9H4V7ZM4 13H20V11H4V13ZM4 17H11V15H4V17ZM4 21H11V19H4V21ZM15.41 18.17L14 16.75L12.59 18.16L15.41 21L20 16.42L18.58 15L15.41 18.17ZM4 3V5H20V3H4Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconGrading;
