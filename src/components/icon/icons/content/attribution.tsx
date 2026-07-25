import React from "react";
import { withIcon } from "../../hoc";

const Attribution = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.2)">
        <path
          d="M10 6.5C9.09 6.5 7.25 6.96 7.25 7.88V12.5H8.75V17H11.25V12.5H12.75V7.88C12.75 6.97 10.91 6.5 10 6.5ZM10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"
          fill="currentColor"
        />
        <path
          d="M10 6C10.8284 6 11.5 5.32843 11.5 4.5C11.5 3.67157 10.8284 3 10 3C9.17157 3 8.5 3.67157 8.5 4.5C8.5 5.32843 9.17157 6 10 6Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Attribution;
