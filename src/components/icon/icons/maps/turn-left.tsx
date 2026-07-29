import React from "react";
import { withIcon } from "../../hoc";

const IconTurnLeft = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M8.83 10L10.42 11.59L9 13L5 9L9 5L10.41 6.41L8.83 8H17C18.1 8 19 8.9 19 10V19H17V10H8.83Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconTurnLeft;
