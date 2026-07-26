import React from "react";
import { withIcon } from "../../hoc";

const IconPersonSearch = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M10 11C12.21 11 14 9.21 14 7C14 4.79 12.21 3 10 3C7.79 3 6 4.79 6 7C6 9.21 7.79 11 10 11ZM10 5C11.1 5 12 5.9 12 7C12 8.1 11.1 9 10 9C8.9 9 8 8.1 8 7C8 5.9 8.9 5 10 5Z"
        fill="currentColor"
      />
      <path
        d="M4 17C4.22 16.28 7.31 15 10 15C10 14.3 10.13 13.63 10.35 13.01C7.62 12.91 2 14.27 2 17V19H11.54C11.02 18.42 10.61 17.75 10.35 17H4Z"
        fill="currentColor"
      />
      <path
        d="M19.43 17.02C19.79 16.43 20 15.74 20 15C20 12.79 18.21 11 16 11C13.79 11 12 12.79 12 15C12 17.21 13.79 19 16 19C16.74 19 17.43 18.78 18.02 18.43C18.95 19.36 19.64 20.05 20.59 21L22 19.59C20.5 18.09 21.21 18.79 19.43 17.02ZM16 17C14.9 17 14 16.1 14 15C14 13.9 14.9 13 16 13C17.1 13 18 13.9 18 15C18 16.1 17.1 17 16 17Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconPersonSearch;
