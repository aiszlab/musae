import React from "react";
import { withIcon } from "../../hoc";

const Tonality = withIcon(({ size }) => {
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
          d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM9 17.93C5.06 17.44 2 14.08 2 10C2 5.92 5.05 2.56 9 2.07V17.93ZM11 2.07C12.03 2.2 13 2.52 13.87 3H11V2.07ZM11 5H16.24C16.49 5.31 16.72 5.65 16.92 6H11V5ZM11 8H17.74C17.82 8.33 17.89 8.66 17.93 9H11V8ZM11 17.93V17H13.87C13 17.48 12.03 17.8 11 17.93ZM16.24 15H11V14H16.92C16.72 14.35 16.49 14.69 16.24 15ZM17.74 12H11V11H17.93C17.89 11.34 17.82 11.67 17.74 12Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Tonality;
