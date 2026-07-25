import React from "react";
import { withIcon } from "../../hoc";

const RememberMe = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(4.3636, 0) scale(1.0909)">
        <path
          d="M12 0H2C0.9 0 0 0.9 0 2V20C0 21.1 0.9 22 2 22H12C13.1 22 14 21.1 14 20V2C14 0.9 13.1 0 12 0ZM12 20H2V19H12V20ZM12 17H2V16.52C3.47 15.53 5.22 15 7 15C8.78 15 10.53 15.53 12 16.52V17ZM12 14.21C10.5 13.44 8.8 13 7 13C5.2 13 3.5 13.44 2 14.21V5H12V14.21ZM12 3H2V2H12V3Z"
          fill="currentColor"
        />
        <path
          d="M7 12C8.66 12 10 10.66 10 9C10 7.34 8.66 6 7 6C5.34 6 4 7.34 4 9C4 10.66 5.34 12 7 12ZM7 8C7.55 8 8 8.45 8 9C8 9.55 7.55 10 7 10C6.45 10 6 9.55 6 9C6 8.45 6.45 8 7 8Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default RememberMe;
