import React from "react";
import { withIcon } from "../../hoc";

const Album = withIcon(({ size }) => {
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
          d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM10 5.5C7.51 5.5 5.5 7.51 5.5 10C5.5 12.49 7.51 14.5 10 14.5C12.49 14.5 14.5 12.49 14.5 10C14.5 7.51 12.49 5.5 10 5.5ZM10 11C9.45 11 9 10.55 9 10C9 9.45 9.45 9 10 9C10.55 9 11 9.45 11 10C11 10.55 10.55 11 10 11Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Album;
