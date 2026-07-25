import React from "react";
import { withIcon } from "../../hoc";

const SportsMartialArts = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 19.429 2.952 L 11.619 9.333 L 10.467 8.343 L 13.895 6.362 L 9.533 2 L 8.19 3.343 L 10.8 5.952 L 5.333 9.105 L 4.2 13.19 L 6.543 17.238 L 8.19 16.286 L 6.257 12.933 L 6.59 11.695 L 9.619 13.429 L 10.095 22 L 12 22 L 12.476 12.476 L 20.571 4.286 L 19.429 2.952 Z"
        fill="currentColor"
      />
      <path
        d="M 5.333 7.714 C 6.386 7.714 7.238 6.862 7.238 5.81 C 7.238 4.757 6.386 3.905 5.333 3.905 C 4.281 3.905 3.429 4.757 3.429 5.81 C 3.429 6.862 4.281 7.714 5.333 7.714 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default SportsMartialArts;
