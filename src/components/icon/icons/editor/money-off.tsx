import React from "react";
import { withIcon } from "../../hoc";

const MoneyOff = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(1.3133, 0) scale(1.3333)">
        <path
          d="M8.44 3.9C10.22 3.9 10.88 4.75 10.94 6H13.15C13.08 4.28 12.03 2.7 9.94 2.19V0H6.94V2.16C6.55 2.24 6.19 2.37 5.84 2.52L7.35 4.03C7.67 3.95 8.04 3.9 8.44 3.9ZM1.41 0.92L0 2.33L3.44 5.77C3.44 7.85 5 8.99 7.35 9.68L10.86 13.19C10.52 13.68 9.81 14.1 8.44 14.1C6.38 14.1 5.57 13.18 5.46 12H3.26C3.38 14.19 5.02 15.42 6.94 15.83V18H9.94V15.85C10.9 15.67 11.77 15.3 12.4 14.73L14.62 16.95L16.03 15.54L1.41 0.92Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default MoneyOff;
