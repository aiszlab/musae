import React from "react";
import { withIcon } from "../../hoc";

const IconMovieCreation = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M5.76 8H20V16H4V4.47M22 2H18L20 6H17L15 2H13L15 6H12L10 2H8L10 6H7L5 2H4C2.9 2 2 2.9 2 4V16C2 17.1 2.9 18 4 18H20C21.1 18 22 17.1 22 16V2Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconMovieCreation;
