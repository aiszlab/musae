import React from "react";
import { withIcon } from "../../hoc";

const CoffeeMaker = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 18 6 L 18 4 L 20 4 L 20 2 L 6 2 C 4.9 2 4 2.9 4 4 L 4 20 C 4 21.1 4.9 22 6 22 L 20 22 L 20 20 L 15.97 20 C 17.2 19.09 18 17.64 18 16 L 18 11 L 8 11 L 8 16 C 8 17.64 8.81 19.09 10.03 20 L 6 20 L 6 4 L 8 4 L 8 6 C 8 6.55 8.45 7 9 7 L 17 7 C 17.55 7 18 6.55 18 6 Z M 10 16 L 10 13 L 16 13 L 16 16 C 16 17.65 14.65 19 13 19 C 11.35 19 10 17.65 10 16 Z"
        fill="currentColor"
      />
      <path
        d="M 13 10 C 13.55 10 14 9.55 14 9 C 14 8.45 13.55 8 13 8 C 12.45 8 12 8.45 12 9 C 12 9.55 12.45 10 13 10 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default CoffeeMaker;
