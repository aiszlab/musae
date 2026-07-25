import React from "react";
import { withIcon } from "../../hoc";

const HeartBroken = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 16.5 3 C 15.54 3 14.6 3.25 13.77 3.69 L 12 9 L 15 9 L 12 19 L 13 10 L 10 10 L 11.54 4.61 C 10.47 3.61 9.01 3 7.5 3 C 4.42 3 2 5.42 2 8.5 C 2 12.63 6.16 15.68 12 21 C 17.47 16.06 22 12.74 22 8.5 C 22 5.42 19.58 3 16.5 3 Z M 10.24 16.73 C 6.45 13.34 4 11 4 8.5 C 4 6.54 5.54 5 7.5 5 C 8.09 5 8.69 5.15 9.23 5.42 L 7.35 12 L 10.77 12 L 10.24 16.73 Z M 15.13 15.53 L 17.69 7 L 14.78 7 L 15.39 5.18 C 15.75 5.06 16.13 5 16.5 5 C 18.46 5 20 6.54 20 8.5 C 20 10.71 17.98 12.93 15.13 15.53 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default HeartBroken;
