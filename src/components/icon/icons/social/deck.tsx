import React from "react";
import { withIcon } from "../../hoc";

const Deck = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 22 9 L 12 2 L 2 9 L 11 9 L 11 22 L 13 22 L 13 9 L 22 9 Z M 12 4.44 L 15.66 7 L 8.34 7 L 12 4.44 Z"
        fill="currentColor"
      />
      <path
        d="M 4.14 12 L 2.18 12.37 L 3 16.74 L 3 22 L 5 22 L 5.02 18 L 7 18 L 7 22 L 9 22 L 9 16 L 4.9 16 L 4.14 12 Z"
        fill="currentColor"
      />
      <path
        d="M 19.1 16 L 15 16 L 15 22 L 17 22 L 17 18 L 18.98 18 L 19 22 L 21 22 L 21 16.74 L 21.82 12.37 L 19.86 12 L 19.1 16 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default Deck;
