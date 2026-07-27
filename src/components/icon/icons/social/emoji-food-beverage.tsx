import React from "react";
import { withIcon } from "../../hoc";

const IconEmojiFoodBeverage = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M 20 19 L 2 19 L 2 21 L 20 21 L 20 19 Z" fill="currentColor" />
      <path
        d="M 20 3 L 4 3 L 4 13 C 4 15.21 5.79 17 8 17 L 14 17 C 16.21 17 18 15.21 18 13 L 18 10 L 20 10 C 21.11 10 22 9.11 22 8 L 22 5 C 22 3.89 21.11 3 20 3 Z M 16 13 C 16 14.1 15.1 15 14 15 L 8 15 C 6.9 15 6 14.1 6 13 L 6 5 L 9 5 L 9 6.4 L 7.19 7.85 C 7.07 7.94 7 8.09 7 8.24 L 7 12.5 C 7 12.78 7.22 13 7.5 13 L 11.5 13 C 11.78 13 12 12.78 12 12.5 L 12 8.24 C 12 8.09 11.93 7.94 11.81 7.85 L 10 6.4 L 10 5 L 16 5 L 16 13 Z M 9.5 7.28 L 11 8.48 L 11 12 L 8 12 L 8 8.48 L 9.5 7.28 Z M 20 8 L 18 8 L 18 5 L 20 5 L 20 8 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconEmojiFoodBeverage;
