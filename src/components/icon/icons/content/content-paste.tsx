import React from "react";
import { withIcon } from "../../hoc";

const ContentPaste = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(2.1818, 0) scale(1.0909)">
        <path
          d="M16 2H11.82C11.4 0.84 10.3 0 9 0C7.7 0 6.6 0.84 6.18 2H2C0.9 2 0 2.9 0 4V20C0 21.1 0.9 22 2 22H16C17.1 22 18 21.1 18 20V4C18 2.9 17.1 2 16 2ZM9 2C9.55 2 10 2.45 10 3C10 3.55 9.55 4 9 4C8.45 4 8 3.55 8 3C8 2.45 8.45 2 9 2ZM16 20H2V4H4V7H14V4H16V20Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default ContentPaste;
