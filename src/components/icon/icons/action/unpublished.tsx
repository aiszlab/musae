import React from "react";
import { withIcon } from "../../hoc";

const Unpublished = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M15.59 10.91L13.41 8.73L12 10.14L14.18 12.32L12 14.5L13.41 15.91L15.59 13.73L17.77 15.91L19.18 14.5L17 12.32L19.18 10.14L17.77 8.73L15.59 10.91ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default Unpublished;
