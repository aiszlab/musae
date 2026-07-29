import React from "react";
import { withIcon } from "../../hoc";

const IconDining = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M14.75 6C13.38 6 12.25 7.52 12.25 9.4C12.25 10.88 12.95 12.11 13.92 12.58L14 12.62V19H15.5V12.62L15.58 12.59C16.55 12.12 17.25 10.89 17.25 9.41C17.25 7.53 16.13 6 14.75 6ZM10.5 6C10.23 6 10 6.22 10 6.5V9H9.25V6.5C9.25 6.22 9.03 6 8.75 6C8.47 6 8.25 6.22 8.25 6.5V9H7.5V6.5C7.5 6.22 7.28 6 7 6C6.72 6 6.5 6.22 6.5 6.5V10.3C6.5 11.23 7.14 12.01 8 12.23V19H9.5V12.23C10.36 12.01 11 11.23 11 10.3V6.5C11 6.22 10.78 6 10.5 6ZM20 4H4V20H20V4ZM20 2C21.1 2 22 2.9 22 4V20C22 21.1 21.1 22 20 22H4C2.9 22 2 21.1 2 20V4C2 2.9 2.9 2 4 2H20Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconDining;
