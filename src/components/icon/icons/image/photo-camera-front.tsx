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
        d="M20 4H16.83L15 2H9L7.17 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V6H8.05L9.88 4H14.12L15.95 6H20V18Z"
        fill="currentColor"
      />
      <path
        d="M12 12C13.1046 12 14 11.1046 14 10C14 8.8954 13.1046 8 12 8C10.8954 8 10 8.8954 10 10C10 11.1046 10.8954 12 12 12Z"
        fill="currentColor"
      />
      <path
        d="M14.78 13.58C13.93 13.21 12.99 13 12 13C11.01 13 10.07 13.21 9.22 13.58C8.48 13.9 8 14.62 8 15.43V16H16V15.43C16 14.62 15.52 13.9 14.78 13.58Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconPhotoCameraFront;
