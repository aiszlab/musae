import React from "react";
import { withIcon } from "../../hoc";

const VideoCameraFront = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 2.4) scale(1.2)">
        <path
          d="M16 6.48V2C16 0.9 15.1 0 14 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H14C15.1 16 16 15.1 16 14V9.52L20 13.5V2.5L16 6.48ZM14 14H2V2H14V14Z"
          fill="currentColor"
        />
        <path
          d="M8 8C9.10457 8 10 7.10457 10 6C10 4.89543 9.10457 4 8 4C6.89543 4 6 4.89543 6 6C6 7.10457 6.89543 8 8 8Z"
          fill="currentColor"
        />
        <path
          d="M12 11.43C12 10.62 11.52 9.9 10.78 9.58C9.93 9.21 8.99 9 8 9C7.01 9 6.07 9.21 5.22 9.58C4.48 9.9 4 10.62 4 11.43V12H12V11.43Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default VideoCameraFront;
