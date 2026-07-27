import React from "react";
import { withIcon } from "../../hoc";

const IconShapeLine = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M6 11C8.76 11 11 8.76 11 6C11 3.24 8.76 1 6 1C3.24 1 1 3.24 1 6C1 8.76 3.24 11 6 11ZM6 3C7.65 3 9 4.35 9 6C9 7.65 7.65 9 6 9C4.35 9 3 7.65 3 6C3 4.35 4.35 3 6 3Z"
        fill="currentColor"
      />
      <path
        d="M21 14H16C14.9 14 14 14.9 14 16V21C14 22.1 14.9 23 16 23H21C22.1 23 23 22.1 23 21V16C23 14.9 22.1 14 21 14ZM21 21H16V16H21V21Z"
        fill="currentColor"
      />
      <path
        d="M17.71 7.7C18.11 7.89 18.54 8 19 8C20.65 8 22 6.65 22 5C22 3.35 20.65 2 19 2C17.35 2 16 3.35 16 5C16 5.46 16.11 5.89 16.3 6.29L6.29 16.3C5.89 16.11 5.46 16 5 16C3.35 16 2 17.35 2 19C2 20.65 3.35 22 5 22C6.65 22 8 20.65 8 19C8 18.54 7.89 18.11 7.7 17.71L17.71 7.7Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconShapeLine;
