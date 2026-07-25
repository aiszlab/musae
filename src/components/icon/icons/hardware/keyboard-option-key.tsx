import React from "react";
import { withIcon } from "../../hoc";

const KeyboardOptionKey = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 2.6667) scale(1.3333)">
        <path d="M18 0H12V2H18V0Z" fill="currentColor" />
        <path d="M6 0H0V2H4.85L11.77 14H18V12H12.93L6 0Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default KeyboardOptionKey;
