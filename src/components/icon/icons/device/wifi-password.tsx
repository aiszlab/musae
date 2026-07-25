import React from "react";
import { withIcon } from "../../hoc";

const WifiPassword = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 2) scale(1)">
        <path
          d="M24 4.98L21.88 7.11C19.35 4.57 15.85 3 12 3C8.15 3 4.65 4.57 2.12 7.11L0 4.98C3.07 1.9 7.31 0 12 0C16.69 0 20.93 1.9 24 4.98ZM4.24 9.22L6.36 11.34C7.8 9.9 9.8 9 12 9C14.2 9 16.2 9.9 17.64 11.35L19.76 9.23C17.78 7.23 15.03 6 12 6C8.97 6 6.22 7.23 4.24 9.22ZM24 16V19C24 19.55 23.55 20 23 20H19C18.45 20 18 19.55 18 19V16C18 15.45 18.45 15 19 15V14C19 12.9 19.9 12 21 12C22.1 12 23 12.9 23 14V15C23.55 15 24 15.45 24 16ZM22 14C22 13.45 21.55 13 21 13C20.45 13 20 13.45 20 14V15H22V14ZM12 12C10.62 12 9.37 12.56 8.47 13.46L12 17L15.53 13.46C14.63 12.56 13.38 12 12 12Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default WifiPassword;
