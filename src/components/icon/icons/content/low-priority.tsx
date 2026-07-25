import React from "react";
import { withIcon } from "../../hoc";

const LowPriority = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 3) scale(1.2)">
        <path
          d="M12 0H20V2H12V0ZM12 5.5H20V7.5H12V5.5ZM12 11H20V13H12V11ZM0 6.5C0 10.08 2.92 13 6.5 13H7V15L10 12L7 9V11H6.5C4.02 11 2 8.98 2 6.5C2 4.02 4.02 2 6.5 2H10V0H6.5C2.92 0 0 2.92 0 6.5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default LowPriority;
