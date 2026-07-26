import React from "react";
import { withIcon } from "../../hoc";

const IconVideoChat = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 20 2 L 4 2 C 2.9 2 2.01 2.9 2.01 4 L 2 22 L 6 18 L 20 18 C 21.1 18 22 17.1 22 16 L 22 4 C 22 2.9 21.1 2 20 2 Z M 20 16 L 5.17 16 L 4 17.17 L 4 4 L 20 4 L 20 16 Z"
        fill="currentColor"
      />
      <path
        d="M 8 14 L 14 14 C 14.55 14 15 13.55 15 13 L 15 11.01 L 17 13 L 17 7 L 15 8.99 L 15 7 C 15 6.45 14.55 6 14 6 L 8 6 C 7.45 6 7 6.45 7 7 L 7 13 C 7 13.55 7.45 14 8 14 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconVideoChat;
