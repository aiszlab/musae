import React from "react";
import { withIcon } from "../../hoc";

const FolderSpecial = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 20 6 L 12 6 L 10 4 L 4 4 C 2.9 4 2 4.9 2 6 L 2 18 C 2 19.1 2.9 20 4 20 L 20 20 C 21.1 20 22 19.1 22 18 L 22 8 C 22 6.9 21.1 6 20 6 Z M 20 18 L 4 18 L 4 6 L 9.17 6 L 11.17 8 L 20 8 L 20 18 Z M 13.08 14.04 L 12.39 17 L 15 15.47 L 17.61 17 L 16.92 14.04 L 19.22 12.05 L 16.19 11.79 L 15 9 L 13.81 11.79 L 10.78 12.05 L 13.08 14.04 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default FolderSpecial;
