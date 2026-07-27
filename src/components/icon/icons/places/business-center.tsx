import React from "react";
import { withIcon } from "../../hoc";

const IconBusinessCenter = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 20 7 L 16 7 L 16 5 L 14 3 L 10 3 L 8 5 L 8 7 L 4 7 C 2.9 7 2 7.9 2 9 L 2 14 C 2 14.75 2.4 15.38 3 15.73 L 3 19 C 3 20.11 3.89 21 5 21 L 19 21 C 20.11 21 21 20.11 21 19 L 21 15.72 C 21.59 15.37 22 14.73 22 14 L 22 9 C 22 7.9 21.1 7 20 7 Z M 10 5 L 14 5 L 14 7 L 10 7 L 10 5 Z M 4 9 L 20 9 L 20 14 L 15 14 L 15 11 L 9 11 L 9 14 L 4 14 L 4 9 Z M 13 15 L 11 15 L 11 13 L 13 13 L 13 15 Z M 19 19 L 5 19 L 5 16 L 9 16 L 9 17 L 15 17 L 15 16 L 19 16 L 19 19 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconBusinessCenter;
