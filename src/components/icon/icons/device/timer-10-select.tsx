import React from "react";
import { withIcon } from "../../hoc";

const Timer10Select = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 4.3636) scale(1.0909)">
        <path
          d="M12 3V11H9V3H12ZM12 0H9C7.34 0 6 1.34 6 3V11C6 12.66 7.34 14 9 14H12C13.66 14 15 12.66 15 11V3C15 1.34 13.66 0 12 0ZM0 3H2V14H5V0H0V3ZM17.5 6C16.67 6 16 6.68 16 7.5V9.5C16 10.32 16.67 11 17.5 11H20V12H16V14H20.5C21.33 14 22 13.33 22 12.5V10.5C22 9.67 21.33 9 20.5 9H18V8H22V6H17.5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Timer10Select;
