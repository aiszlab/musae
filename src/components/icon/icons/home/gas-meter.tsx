import React from "react";
import { withIcon } from "../../hoc";

const GasMeter = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(2.4, 0) scale(1.2)">
        <path
          d="M12 2H11V0H9V2H7V0H5V2H4C1.79 2 0 3.79 0 6V16C0 18.21 1.79 20 4 20H12C14.21 20 16 18.21 16 16V6C16 3.79 14.21 2 12 2ZM14 16C14 17.1 13.1 18 12 18H4C2.9 18 2 17.1 2 16V6C2 4.9 2.9 4 4 4H12C13.1 4 14 4.9 14 6V16Z"
          fill="currentColor"
        />
        <path
          d="M5.5 13.54C5.5 14.9 6.62 16 8 16C9.38 16 10.5 14.9 10.5 13.54C10.5 12.45 10.05 12.13 8 9.75C5.93 12.15 5.5 12.46 5.5 13.54Z"
          fill="currentColor"
        />
        <path d="M12 6H4V8H12V6Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default GasMeter;
