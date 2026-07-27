import React from "react";
import { withIcon } from "../../hoc";

const IconBackupTable = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M20 6V20H6V22H20C21.1 22 22 21.1 22 20V6H20Z" fill="currentColor" />
      <path
        d="M16 2H4C2.9 2 2 2.9 2 4V16C2 17.1 2.9 18 4 18H16C17.1 18 18 17.1 18 16V4C18 2.9 17.1 2 16 2ZM9 16H4V11H9V16ZM16 16H11V11H16V16ZM16 9H4V4H16V9Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconBackupTable;
