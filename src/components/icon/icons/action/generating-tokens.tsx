import React from "react";
import { withIcon } from "../../hoc";

const IconGeneratingTokens = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M9 4C4.58 4 1 7.58 1 12C1 16.42 4.58 20 9 20C13.42 20 17 16.42 17 12C17 7.58 13.42 4 9 4ZM9 18C5.69 18 3 15.31 3 12C3 8.69 5.69 6 9 6C12.31 6 15 8.69 15 12C15 15.31 12.31 18 9 18ZM12 10.5H10V15.5H8V10.5H6V9H12V10.5ZM20.25 3.75L23 5L20.25 6.25L19 9L17.75 6.25L15 5L17.75 3.75L19 1L20.25 3.75ZM20.25 17.75L23 19L20.25 20.25L19 23L17.75 20.25L15 19L17.75 17.75L19 15L20.25 17.75Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconGeneratingTokens;
