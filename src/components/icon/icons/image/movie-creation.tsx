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
        d="M5.76 10H20V18H4V6.47M22 4H18L20 8H17L15 4H13L15 8H12L10 4H8L10 8H7L5 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V4Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconMovieCreation;
