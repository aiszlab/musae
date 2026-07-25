import React from "react";
import { withIcon } from "../../hoc";

const AccountTree = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 22 11 L 22 3 L 15 3 L 15 6 L 9 6 L 9 3 L 2 3 L 2 11 L 9 11 L 9 8 L 11 8 L 11 18 L 15 18 L 15 21 L 22 21 L 22 13 L 15 13 L 15 16 L 13 16 L 13 8 L 15 8 L 15 11 L 22 11 Z M 7 9 L 4 9 L 4 5 L 7 5 L 7 9 Z M 17 15 L 20 15 L 20 19 L 17 19 L 17 15 Z M 17 5 L 20 5 L 20 9 L 17 9 L 17 5 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default AccountTree;
