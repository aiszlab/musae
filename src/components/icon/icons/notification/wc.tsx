import React from "react";
import { withIcon } from "../../hoc";

const IconWc = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 5 22 L 5 14.5 L 3.5 14.5 L 3.5 9 C 3.5 7.9 4.4 7 5.5 7 L 8.5 7 C 9.6 7 10.5 7.9 10.5 9 L 10.5 14.5 L 9 14.5 L 9 22 L 5 22 Z M 17.5 22 L 17.5 16 L 20.5 16 L 17.96 8.37 C 17.68 7.55 16.92 7 16.06 7 L 15.94 7 C 15.08 7 14.31 7.55 14.04 8.37 L 11.5 16 L 14.5 16 L 14.5 22 L 17.5 22 Z M 7 6 C 8.11 6 9 5.11 9 4 C 9 2.89 8.11 2 7 2 C 5.89 2 5 2.89 5 4 C 5 5.11 5.89 6 7 6 Z M 16 6 C 17.11 6 18 5.11 18 4 C 18 2.89 17.11 2 16 2 C 14.89 2 14 2.89 14 4 C 14 5.11 14.89 6 16 6 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconWc;
