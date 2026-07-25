import React from "react";
import { withIcon } from "../../hoc";

const Backpack = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 17 4.14 L 17 2 L 14 2 L 14 4 L 10 4 L 10 2 L 7 2 L 7 4.14 C 5.28 4.59 4 6.14 4 8 L 4 20 C 4 21.1 4.9 22 6 22 L 18 22 C 19.1 22 20 21.1 20 20 L 20 8 C 20 6.14 18.72 4.59 17 4.14 Z M 18 20 L 6 20 L 6 8 C 6 6.9 6.9 6 8 6 L 16 6 C 17.1 6 18 6.9 18 8 L 18 20 Z M 16.5 12 L 16.5 16 L 14.5 16 L 14.5 14 L 7.5 14 L 7.5 12 L 16.5 12 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default Backpack;
