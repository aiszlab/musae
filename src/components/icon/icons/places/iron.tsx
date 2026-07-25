import React from "react";
import { withIcon } from "../../hoc";

const Iron = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 21 6 C 19.34 6 18 7.34 18 9 L 18 13 C 18 13.55 17.55 14 17 14 L 17 10 C 17 8.34 15.66 7 14 7 L 10 7 C 8.34 7 7 8.34 7 10 L 9 10 C 9 9.45 9.45 9 10 9 L 14 9 C 14.55 9 15 9.45 15 10 L 15 11 L 6 11 C 3.79 11 2 12.79 2 15 L 2 18 L 17 18 L 17 16 C 18.66 16 20 14.66 20 13 L 20 9 C 20 8.45 20.45 8 21 8 L 22 8 L 22 6 L 21 6 Z M 15 16 L 4 16 L 4 15 C 4 13.9 4.9 13 6 13 L 15 13 L 15 16 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default Iron;
