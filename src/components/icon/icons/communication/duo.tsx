import React from "react";
import { withIcon } from "../../hoc";

const Duo = withIcon(({ size }) => {
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
          d="M18 0H10C4.38 0 0 4.66 0 10.28C0 15.5 4.49 20 9.72 20C15.39 20 20 15.62 20 10V2C20 0.9 19.1 0 18 0ZM15 13L12 11V13H5V7H12V9L15 7V13Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Duo;
