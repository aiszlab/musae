import React from "react";
import { withIcon } from "../../hoc";

const IconNorth = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M5 9L6.41 10.41L11 5.83V22H13V5.83L17.59 10.42L19 9L12 2L5 9Z" fill="currentColor" />
    </svg>
  );
});

export default IconNorth;
