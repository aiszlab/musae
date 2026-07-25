import React from "react";
import { withIcon } from "../../hoc";

const Unsubscribe = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 1.2626) scale(1.263)">
        <path
          d="M17.99 11.04V2C17.99 0.9 17.09 0 15.99 0H2C0.9 0 0 0.9 0 2V12C0 13.1 0.9 14 2 14H12.05C12.33 15.92 14.15 17.35 16.23 16.93C17.57 16.66 18.66 15.56 18.93 14.22C19.18 12.98 18.77 11.83 17.99 11.04ZM15.99 2L9 5.5L2 2H15.99ZM12.35 12H2V4L9 7.5L16 4V10.05C15.84 10.03 15.67 10 15.5 10C14.11 10 12.91 10.82 12.35 12ZM17.5 14H13.5V13H17.5V14Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Unsubscribe;
