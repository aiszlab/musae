import React from "react";
import { withIcon } from "../../hoc";

const IconMerge = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M6.41 21L5 19.59L9.83 14.76C10.58 14.01 11 12.99 11 11.93V6.83L9.41 8.41L8 7L12 3L16 7L14.59 8.41L13 6.83V11.93C13 12.99 13.42 14.01 14.17 14.76L19 19.59L17.59 21L12 15.41L6.41 21Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconMerge;
