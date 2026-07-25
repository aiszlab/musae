import React from "react";
import { withIcon } from "../../hoc";

const Nature = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(3.4251, 0) scale(1.2103)">
        <path
          d="M8 13.95H7.97C11.46 13.55 14.17 10.59 14.17 7C14.17 3.13 11.04 0 7.17 0C3.3 0 0.17 3.13 0.17 7C0.17 10.47 2.69 13.34 6 13.89V17.83H0V19.83H14V17.83H8V13.95ZM2.17 7C2.17 4.24 4.41 2 7.17 2C9.93 2 12.17 4.24 12.17 7C12.17 9.76 9.93 12 7.17 12C4.41 12 2.17 9.76 2.17 7Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Nature;
