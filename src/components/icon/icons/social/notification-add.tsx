import React from "react";
import { withIcon } from "../../hoc";

const IconNotificationAdd = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M14 14V17H6V10C6 7.79 7.79 6 10 6C10.85 6 11.64 6.26 12.28 6.72L13.71 5.29C13.07 4.78 12.32 4.41 11.5 4.2V3.5C11.5 2.67 10.83 2 10 2C9.17 2 8.5 2.67 8.5 3.5V4.2C5.91 4.86 4 7.21 4 10V17H2V19H18V17H16V14H14ZM10 22C11.1 22 12 21.1 12 20H8C8 21.1 8.9 22 10 22ZM22 8H19V5H17V8H14V10H17V13H19V10H22V8Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconNotificationAdd;
