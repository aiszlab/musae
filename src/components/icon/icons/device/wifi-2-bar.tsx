import React from "react";
import { withIcon } from "../../hoc";

const Wifi2Bar = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 3.4948) scale(1.5464)">
        <path
          d="M7.76 0C10.79 0 13.54 1.23 15.52 3.22L13.4 5.34C11.96 3.9 9.96 3 7.76 3C5.56 3 3.56 3.9 2.12 5.35L0 3.23C1.98 1.23 4.73 0 7.76 0ZM7.76 6C6.38 6 5.13 6.56 4.23 7.46L7.76 11L11.29 7.46C10.39 6.56 9.14 6 7.76 6Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Wifi2Bar;
