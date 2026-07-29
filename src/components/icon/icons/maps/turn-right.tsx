import React from "react";
import { withIcon } from "../../hoc";

const IconTurnRight = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M15.17 10L13.58 11.59L15 13L19 9L15 5L13.59 6.41L15.17 8H7C5.9 8 5 8.9 5 10V19H7V10H15.17Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconTurnRight;
