import React from "react";
import { withIcon } from "../../hoc";

const ThirtyFps = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 3.6) scale(1.2)">
        <path
          d="M0 0V3H6V5.5H1V8.5H6V11H0V14H6C7.66 14 9 12.66 9 11V9.1C9 7.94 8.06 7 6.9 7C8.06 7 9 6.06 9 4.9V3C9 1.34 7.66 0 6 0H0ZM17 3V11H13V3H17ZM17 0H13C11.34 0 10 1.34 10 3V11C10 12.66 11.34 14 13 14H17C18.66 14 20 12.66 20 11V3C20 1.34 18.66 0 17 0Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default ThirtyFps;
