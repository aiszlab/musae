import React from "react";
import { withIcon } from "../../hoc";

const ContentPasteGo = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0.6, 0) scale(1.2)">
        <path
          d="M2 4H4V7H14V4H16V10H18V4C18 2.9 17.1 2 16 2H11.82C11.4 0.84 10.3 0 9 0C7.7 0 6.6 0.84 6.18 2H2C0.9 2 0 2.9 0 4V18C0 19.1 0.9 20 2 20H7V18H2V4ZM9 2C9.55 2 10 2.45 10 3C10 3.55 9.55 4 9 4C8.45 4 8 3.55 8 3C8 2.45 8.45 2 9 2Z"
          fill="currentColor"
        />
        <path
          d="M15.01 12L13.59 13.41L15.17 14.99H9V16.99H15.17L13.59 18.58L15.01 19.99L19 15.99L15.01 12Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default ContentPasteGo;
