import React from "react";
import { withIcon } from "../../hoc";

const IconPhotoCameraFront = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M20 5H16.83L15 3H9L7.17 5H4C2.9 5 2 5.9 2 7V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V7C22 5.9 21.1 5 20 5ZM20 19H4V7H8.05L9.88 5H14.12L15.95 7H20V19Z"
        fill="currentColor"
      />
      <path
        d="M12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13Z"
        fill="currentColor"
      />
      <path
        d="M14.78 14.58C13.93 14.21 12.99 14 12 14C11.01 14 10.07 14.21 9.22 14.58C8.48 14.9 8 15.62 8 16.43V17H16V16.43C16 15.62 15.52 14.9 14.78 14.58Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconPhotoCameraFront;
