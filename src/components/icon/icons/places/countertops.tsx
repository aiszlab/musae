import React from "react";
import { withIcon } from "../../hoc";

const IconCountertops = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 22 10 L 18 10 L 18 7 C 18 5.34 16.66 4 15 4 C 13.34 4 12 5.34 12 7 L 14 7 C 14 6.45 14.45 6 15 6 C 15.55 6 16 6.45 16 7 L 16 10 L 8 10 C 9.1 10 10 9.1 10 8 L 10 4 L 4 4 L 4 8 C 4 9.1 4.9 10 6 10 L 2 10 L 2 12 L 4 12 L 4 20 L 20 20 L 20 12 L 22 12 L 22 10 Z M 6 6 L 8 6 L 8 8 L 6 8 L 6 6 Z M 6 18 L 6 12 L 11 12 L 11 18 L 6 18 Z M 18 18 L 13 18 L 13 12 L 18 12 L 18 18 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconCountertops;
