import React from "react";
import { withIcon } from "../../hoc";

const FireHydrantAlt = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(1.2, 0) scale(1.2)">
        <path
          d="M9 8.5C7.07 8.5 5.5 10.07 5.5 12C5.5 13.93 7.07 15.5 9 15.5C10.93 15.5 12.5 13.93 12.5 12C12.5 10.07 10.93 8.5 9 8.5ZM9 13.5C8.17 13.5 7.5 12.83 7.5 12C7.5 11.17 8.17 10.5 9 10.5C9.83 10.5 10.5 11.17 10.5 12C10.5 12.83 9.83 13.5 9 13.5Z"
          fill="currentColor"
        />
        <path
          d="M16 9H15V6H17V4H14.65C13.83 1.67 11.61 0 9 0C6.39 0 4.17 1.67 3.35 4H1V6H3V9H2C0.9 9 0 9.9 0 11V13C0 14.1 0.9 15 2 15H3V18H1V20H17V18H15V15H16C17.1 15 18 14.1 18 13V11C18 9.9 17.1 9 16 9ZM9 2C10.47 2 11.75 2.81 12.44 4H5.56C6.25 2.81 7.53 2 9 2ZM16 13H13V18H5V13H2V11H5V6H13V11H16V13Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default FireHydrantAlt;
