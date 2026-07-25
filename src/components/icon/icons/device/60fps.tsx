import React from "react";
import { withIcon } from "../../hoc";

const SixtyFps = withIcon(({ size }) => {
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
          d="M17 3V11H13V3H17ZM17 0H13C11.34 0 10 1.34 10 3V11C10 12.66 11.34 14 13 14H17C18.66 14 20 12.66 20 11V3C20 1.34 18.66 0 17 0ZM8 3V0H3C1.34 0 0 1.34 0 3V11C0 12.66 1.34 14 3 14H6C7.66 14 9 12.66 9 11V8C9 6.34 7.66 5 6 5H3V3H8ZM6 8V11H3V8H6Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default SixtyFps;
