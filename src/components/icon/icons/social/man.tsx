import React from "react";
import { withIcon } from "../../hoc";

const IconMan = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 14 7 L 10 7 C 8.9 7 8 7.9 8 9 L 8 15 L 10 15 L 10 22 L 14 22 L 14 15 L 16 15 L 16 9 C 16 7.9 15.1 7 14 7 Z"
        fill="currentColor"
      />
      <path
        d="M 12 6 C 13.105 6 14 5.105 14 4 C 14 2.895 13.105 2 12 2 C 10.895 2 10 2.895 10 4 C 10 5.105 10.895 6 12 6 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconMan;
