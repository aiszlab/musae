import React from "react";
import { withIcon } from "../../hoc";

const Redo = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 6.7214) scale(1.173)">
        <path
          d="M16.86 3.6C15.01 1.99 12.61 1 9.96 1C5.31 1 1.38 4.03 0 8.22L2.36 9C3.41 5.81 6.41 3.5 9.96 3.5C11.91 3.5 13.69 4.22 15.08 5.38L11.46 9H20.46V0L16.86 3.6Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Redo;
