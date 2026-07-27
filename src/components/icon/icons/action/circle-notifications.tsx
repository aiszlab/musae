import React from "react";
import { withIcon } from "../../hoc";

const IconCircleNotifications = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 18.5C12.83 18.5 13.5 17.83 13.5 17H10.5C10.5 17.83 11.17 18.5 12 18.5ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM16 11.39C16 9.28 14.97 7.47 13 7V6.5C13 5.93 12.57 5.5 12 5.5C11.43 5.5 11 5.93 11 6.5V7C9.03 7.47 8 9.27 8 11.39V14H7V16H17V14H16V11.39ZM14 14H10V11C10 9.9 10.9 9 12 9C13.1 9 14 9.9 14 11V14Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconCircleNotifications;
