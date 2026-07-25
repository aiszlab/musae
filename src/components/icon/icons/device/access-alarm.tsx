import React from "react";
import { withIcon } from "../../hoc";

const AccessAlarm = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0.0834, 0) scale(1.1917)">
        <path
          d="M20 3.86L15.4 0L14.11 1.53L18.71 5.39L20 3.86ZM5.88 1.53L4.6 0L0 3.85L1.29 5.38L5.88 1.53ZM10.5 6.14H9V12.14L13.75 14.99L14.5 13.76L10.5 11.39V6.14ZM10 2.14C5.03 2.14 1 6.17 1 11.14C1 16.11 5.02 20.14 10 20.14C14.97 20.14 19 16.11 19 11.14C19 6.17 14.97 2.14 10 2.14ZM10 18.14C6.13 18.14 3 15.01 3 11.14C3 7.27 6.13 4.14 10 4.14C13.87 4.14 17 7.27 17 11.14C17 15.01 13.87 18.14 10 18.14Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default AccessAlarm;
