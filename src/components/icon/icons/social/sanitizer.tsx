import React from "react";
import { withIcon } from "../../hoc";

const IconSanitizer = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 14.5 6.5 C 14.5 5.66 16 4 16 4 C 16 4 17.5 5.66 17.5 6.5 C 17.5 7.33 16.83 8 16 8 C 15.17 8 14.5 7.33 14.5 6.5 Z M 18.5 15 C 19.88 15 21 13.88 21 12.5 C 21 10.83 18.5 8 18.5 8 C 18.5 8 16 10.83 16 12.5 C 16 13.88 17.12 15 18.5 15 Z M 12 14 L 10 14 L 10 12 L 8 12 L 8 14 L 6 14 L 6 16 L 8 16 L 8 18 L 10 18 L 10 16 L 12 16 L 12 14 Z M 15 12 L 15 20 C 15 21.1 14.1 22 13 22 L 5 22 C 3.9 22 3 21.1 3 20 L 3 12 C 3 9.03 5.16 6.57 8 6.09 L 8 4 L 6 4 L 6 2 L 12 2 C 13.13 2 14.15 2.39 14.99 3.01 L 13.56 4.44 C 13.1 4.17 12.57 4 12 4 L 10 4 L 10 6.09 C 12.84 6.57 15 9.03 15 12 Z M 13 12 C 13 9.79 11.21 8 9 8 C 6.79 8 5 9.79 5 12 L 5 20 L 13 20 L 13 12 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconSanitizer;
