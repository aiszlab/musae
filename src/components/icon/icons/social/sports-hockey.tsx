import React from "react";
import { withIcon } from "../../hoc";

const SportsHockey = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M 2 17 L 2 20 L 4 20 L 4 16 L 3 16 C 2.45 16 2 16.45 2 17 Z" fill="currentColor" />
      <path
        d="M 9 16 L 5 16 L 5 20 L 9.69 19.99 C 10.07 19.99 10.41 19.78 10.58 19.44 L 11.45 17.54 L 9.86 14.06 L 9 16 Z"
        fill="currentColor"
      />
      <path
        d="M 21.71 16.29 C 21.53 16.11 21.28 16 21 16 L 20 16 L 20 20 L 22 20 L 22 17 C 22 16.72 21.89 16.47 21.71 16.29 Z"
        fill="currentColor"
      />
      <path
        d="M 13.6 12.84 L 17.65 4 L 14.3 4 L 12.54 7.97 L 12.05 9.07 L 12 9.21 L 9.7 4 L 6.35 4 L 11.92 16.16 L 12 16.34 L 13.42 19.44 C 13.59 19.78 13.93 19.99 14.31 19.99 L 19 20 L 19 16 L 15 16 L 13.6 12.84 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default SportsHockey;
