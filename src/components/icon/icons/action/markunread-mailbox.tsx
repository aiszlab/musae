import React from "react";
import { withIcon } from "../../hoc";

const IconMarkunreadMailbox = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M20 7H10V9H20V21H4V9H6V13H8V5H14V1H6V7H4C2.9 7 2 7.9 2 9V21C2 22.1 2.9 23 4 23H20C21.1 23 22 22.1 22 21V9C22 7.9 21.1 7 20 7Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconMarkunreadMailbox;
