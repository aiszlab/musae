import React from "react";
import { withIcon } from "../../hoc";

const NetworkWifi1Bar = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 3.5) scale(1)">
        <path
          d="M12 0C7.31 0 3.07 1.9 0 4.98L12 17L24 4.98C20.93 1.9 16.69 0 12 0ZM15.32 10.84C14.34 10.3 13.2 10 12 10C10.8 10 9.66 10.3 8.68 10.84L2.92 5.07C5.51 3.08 8.67 2 12 2C15.33 2 18.49 3.08 21.08 5.07L15.32 10.84Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default NetworkWifi1Bar;
