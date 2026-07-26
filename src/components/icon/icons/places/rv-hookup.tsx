import React from "react";
import { withIcon } from "../../hoc";

const IconRvHookup = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 19 17 L 19 11 C 19 9.9 18.1 9 17 9 L 6 9 L 6 7 L 3 10 L 6 13 L 6 11 L 10 11 L 10 14 L 3 14 L 3 17 C 3 18.1 3.9 19 5 19 L 7 19 C 7 20.66 8.34 22 10 22 C 11.66 22 13 20.66 13 19 L 21 19 L 21 17 L 19 17 Z M 10 20 C 9.45 20 9 19.55 9 19 C 9 18.45 9.45 18 10 18 C 10.55 18 11 18.45 11 19 C 11 19.55 10.55 20 10 20 Z M 17 14 L 13 14 L 13 11 L 17 11 L 17 14 Z M 16 2 L 16 4 L 8 4 L 8 6 L 16 6 L 16 8 L 19 5 L 16 2 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconRvHookup;
