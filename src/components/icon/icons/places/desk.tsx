import React from "react";
import { withIcon } from "../../hoc";

const Desk = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 2 6 L 2 18 L 4 18 L 4 8 L 14 8 L 14 18 L 16 18 L 16 16 L 20 16 L 20 18 L 22 18 L 22 6 L 2 6 Z M 20 8 L 20 10 L 16 10 L 16 8 L 20 8 Z M 16 14 L 16 12 L 20 12 L 20 14 L 16 14 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default Desk;
