import React from "react";
import { withIcon } from "../../hoc";

const Cameraswitch = withIcon(({ size }) => {
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
          d="M17 2V1C17 0.45 16.55 0 16 0H14C13.45 0 13 0.45 13 1V2H12V6C12 6.55 12.45 7 13 7H14V14C14 15.1 13.1 16 12 16C10.9 16 10 15.1 10 14V4C10 1.79 8.21 0 6 0C3.79 0 2 1.79 2 4V11H1C0.45 11 0 11.45 0 12V16H1V17C1 17.55 1.45 18 2 18H4C4.55 18 5 17.55 5 17V16H6V12C6 11.45 5.55 11 5 11H4V4C4 2.9 4.9 2 6 2C7.1 2 8 2.9 8 4V14C8 16.21 9.79 18 12 18C14.21 18 16 16.21 16 14V7H17C17.55 7 18 6.55 18 6V2H17Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Cameraswitch;
