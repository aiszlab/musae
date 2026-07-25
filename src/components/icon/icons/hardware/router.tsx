import React from "react";
import { withIcon } from "../../hoc";

const Router = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.3333)">
        <path
          d="M13 1.2C14.5 1.2 16 1.8 17.2 2.9L18 2.1C16.6 0.7 14.8 0 13 0C11.2 0 9.4 0.7 8 2.1L8.8 2.9C10 1.8 11.5 1.2 13 1.2ZM9.7 3.7L10.5 4.5C11.2 3.8 12.1 3.5 13 3.5C13.9 3.5 14.8 3.8 15.5 4.5L16.3 3.7C15.4 2.8 14.2 2.3 13 2.3C11.8 2.3 10.6 2.8 9.7 3.7ZM16 10H14V6H12V10H2C0.9 10 0 10.9 0 12V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V12C18 10.9 17.1 10 16 10ZM16 16H2V12H16V16ZM3 13H5V15H3V13ZM6.5 13H8.5V15H6.5V13ZM10 13H12V15H10V13Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Router;
