import React from "react";
import { withIcon } from "../../hoc";

const DiscFull = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 20 7 L 22 7 L 22 12 L 20 12 L 20 7 Z M 10 4 C 5.58 4 2 7.58 2 12 C 2 16.42 5.58 20 10 20 C 14.42 20 18 16.42 18 12 C 18 7.58 14.42 4 10 4 Z M 10 18 C 6.69 18 4 15.31 4 12 C 4 8.69 6.69 6 10 6 C 13.31 6 16 8.69 16 12 C 16 15.31 13.31 18 10 18 Z M 20 14 L 22 14 L 22 16 L 20 16 L 20 14 Z M 10 10 C 8.9 10 8 10.9 8 12 C 8 13.1 8.9 14 10 14 C 11.1 14 12 13.1 12 12 C 12 10.9 11.1 10 10 10 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default DiscFull;
