import React from "react";
import { withIcon } from "../../hoc";

const IconRoofing = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 13 18.5 L 11 18.5 L 11 16.5 L 13 16.5 L 13 18.5 Z M 15 14.5 L 9 14.5 L 9 20.5 L 15 20.5 L 15 14.5 Z M 19 9.8 L 19 4.5 L 16 4.5 L 16 7.1 L 12 3.5 L 2 12.5 L 5 12.5 L 12 6.19 L 19 12.5 L 22 12.5 L 19 9.8 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconRoofing;
