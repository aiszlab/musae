import React from "react";
import { withIcon } from "../../hoc";

const IconMms = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 20 2 L 4 2 C 2.9 2 2 2.9 2 4 L 2 22 L 6 18 L 20 18 C 21.1 18 22 17.1 22 16 L 22 4 C 22 2.9 21.1 2 20 2 Z M 20 16 L 5.17 16 L 4 17.17 L 4 4 L 20 4 L 20 16 Z M 14.5 8 L 11 12.51 L 8.5 9.5 L 5 14 L 19 14 L 14.5 8 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconMms;
