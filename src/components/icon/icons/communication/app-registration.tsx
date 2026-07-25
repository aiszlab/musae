import React from "react";
import { withIcon } from "../../hoc";

const AppRegistration = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0.7059) scale(1.4118)">
        <path d="M10 0H6V4H10V0Z" fill="currentColor" />
        <path d="M4 12H0V16H4V12Z" fill="currentColor" />
        <path d="M4 6H0V10H4V6Z" fill="currentColor" />
        <path d="M4 0H0V4H4V0Z" fill="currentColor" />
        <path d="M16 0H12V4H16V0Z" fill="currentColor" />
        <path d="M7 13.86V16H9.1L15.08 10.03L12.96 7.91L7 13.86Z" fill="currentColor" />
        <path d="M10 8.03V6H6V10H8.03L10 8.03Z" fill="currentColor" />
        <path
          d="M16.85 7.56L15.44 6.15C15.24 5.95 14.93 5.95 14.73 6.15L13.67 7.21L15.79 9.33L16.85 8.27C17.05 8.07 17.05 7.76 16.85 7.56Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default AppRegistration;
