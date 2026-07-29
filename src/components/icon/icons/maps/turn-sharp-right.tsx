import React from "react";
import { withIcon } from "../../hoc";

const IconTurnSharpRight = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M16.5 6.83L18.09 8.42L19.5 7L15.5 3L11.5 7L12.91 8.41L14.5 6.83V13H6.5C5.4 13 4.5 13.9 4.5 15V21H6.5V15H14.5C15.6 15 16.5 14.1 16.5 13V6.83Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconTurnSharpRight;
