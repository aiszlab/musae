import React from "react";
import { withIcon } from "../../hoc";

const Recommend = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 12 2 C 6.48 2 2 6.48 2 12 C 2 17.52 6.48 22 12 22 C 17.52 22 22 17.52 22 12 C 22 6.48 17.52 2 12 2 Z M 12 20 C 7.59 20 4 16.41 4 12 C 4 7.59 7.59 4 12 4 C 16.41 4 20 7.59 20 12 C 20 16.41 16.41 20 12 20 Z"
        fill="currentColor"
      />
      <path
        d="M 17 10 L 12.41 10 L 12.99 6.59 L 12.99 6.39 C 12.98 6.13 12.87 5.88 12.69 5.69 L 12 5 L 7.4 10 C 7.13 10.26 6.98 10.62 7 11 L 7 16 C 7 17.1 7.9 18 9 18 L 14.5 18 C 15.06 18.03 15.58 17.71 15.8 17.2 L 17.9 12.3 C 17.98 12.15 18.02 11.97 18 11.8 L 18 11 C 18 10.45 17.55 10 17 10 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default Recommend;
