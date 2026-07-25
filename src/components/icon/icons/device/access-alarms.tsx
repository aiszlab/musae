import React from "react";
import { withIcon } from "../../hoc";

const AccessAlarms = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0.1188, 0) scale(1.1881)">
        <path
          d="M20 3.9L15.4 0L14.1 1.5L18.7 5.4L20 3.9ZM5.9 1.6L4.6 0.1L0 3.9L1.3 5.4L5.9 1.6ZM10.5 6.2H9V12.2L13.7 15.1L14.5 13.9L10.5 11.5V6.2ZM10 2.2C5 2.2 1 6.2 1 11.2C1 16.2 5 20.2 10 20.2C15 20.2 19 16.2 19 11.2C19 6.2 15 2.2 10 2.2ZM10 18.2C6.1 18.2 3 15.1 3 11.2C3 7.3 6.1 4.2 10 4.2C13.9 4.2 17 7.3 17 11.2C17 15.1 13.9 18.2 10 18.2Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default AccessAlarms;
