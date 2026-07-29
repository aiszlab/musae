import React from "react";
import { withIcon } from "../../hoc";

const IconPartyMode = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M20 5H16.83L15 3H9L7.17 5H4C2.9 5 2 5.9 2 7V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V7C22 5.9 21.1 5 20 5ZM20 19H4V7H8.05L8.64 6.35L9.88 5H14.12L15.36 6.35L15.95 7H20V19ZM9 13C9 11.34 10.34 10 12 10H15.98C15.06 8.79 13.63 8 12 8C9.24 8 7 10.24 7 13C7 13.34 7.04 13.68 7.1 14H9.18C9.07 13.69 9 13.35 9 13ZM15 13C15 14.66 13.66 16 12 16H8.02C8.94 17.21 10.37 18 12 18C14.76 18 17 15.76 17 13C17 12.66 16.97 12.32 16.9 12H14.82C14.93 12.31 15 12.65 15 13Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconPartyMode;
