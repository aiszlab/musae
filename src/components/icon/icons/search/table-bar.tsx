import React from "react";
import { withIcon } from "../../hoc";

const TableBar = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 22 7.5 C 22 5.57 17.52 4 12 4 C 6.48 4 2 5.57 2 7.5 C 2 9.31 5.95 10.81 11 10.98 L 11 15 L 9.35 15 C 8.53 15 7.8 15.5 7.49 16.26 L 6 20 L 8 20 L 9.2 17 L 14.8 17 L 16 20 L 18 20 L 16.5 16.26 C 16.2 15.5 15.46 15 14.65 15 L 13 15 L 13 10.98 C 18.05 10.81 22 9.31 22 7.5 Z M 12 6 C 16.05 6 18.74 6.86 19.72 7.5 C 18.74 8.14 16.05 9 12 9 C 7.95 9 5.26 8.14 4.28 7.5 C 5.26 6.86 7.95 6 12 6 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default TableBar;
