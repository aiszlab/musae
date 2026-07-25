import React from "react";
import { withIcon } from "../../hoc";

const Usb = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(3.9623, 0) scale(1.1321)">
        <path
          d="M10.2 6V10H11.2V12H8.2V4H10.2L7.2 0L4.2 4H6.2V12H3.2V9.93C3.9 9.56 4.4 8.85 4.4 8C4.4 6.79 3.41 5.8 2.2 5.8C0.99 5.8 0 6.79 0 8C0 8.85 0.5 9.56 1.2 9.93V12C1.2 13.11 2.09 14 3.2 14H6.2V17.05C5.49 17.42 5 18.15 5 19C5 20.22 5.99 21.2 7.2 21.2C8.41 21.2 9.4 20.22 9.4 19C9.4 18.15 8.91 17.42 8.2 17.05V14H11.2C12.31 14 13.2 13.11 13.2 12V10H14.2V6H10.2Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Usb;
