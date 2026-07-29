import React from "react";
import { withIcon } from "../../hoc";

const IconStraight = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M11 6.83L9.41 8.41L8 7L12 3L16 7L14.59 8.41L13 6.83V21H11V6.83Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconStraight;
