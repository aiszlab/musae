import React from "react";
import { withIcon } from "../../hoc";

const IconStarBorder = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 22 9.74 L 14.81 9.12 L 12 2.5 L 9.19 9.13 L 2 9.74 L 7.46 14.47 L 5.82 21.5 L 12 17.77 L 18.18 21.5 L 16.55 14.47 L 22 9.74 Z M 12 15.9 L 8.24 18.17 L 9.24 13.89 L 5.92 11.01 L 10.3 10.63 L 12 6.6 L 13.71 10.64 L 18.09 11.02 L 14.77 13.9 L 15.77 18.18 L 12 15.9 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconStarBorder;
