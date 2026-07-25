import React from "react";
import { withIcon } from "../../hoc";

const PlusOne = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 10 7.333 L 7.333 7.333 L 7.333 12.667 L 2 12.667 L 2 15.333 L 7.333 15.333 L 7.333 20.667 L 10 20.667 L 10 15.333 L 15.333 15.333 L 15.333 12.667 L 10 12.667 L 10 7.333 Z M 16 4.773 L 16 7.2 L 19.333 6.533 L 19.333 20.667 L 22 20.667 L 22 3.333 L 16 4.773 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default PlusOne;
