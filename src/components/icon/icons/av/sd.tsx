import React from "react";
import { withIcon } from "../../hoc";

const IconSd = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M7 15H10C10.55 15 11 14.55 11 14V12.5C11 11.95 10.55 11.5 10 11.5H7.5V10.5H9.5V11H11V10C11 9.45 10.55 9 10 9H7C6.45 9 6 9.45 6 10V11.5C6 12.05 6.45 12.5 7 12.5H9.5V13.5H7.5V13H6V14C6 14.55 6.45 15 7 15Z"
        fill="currentColor"
      />
      <path
        d="M18 14V10C18 9.45 17.55 9 17 9H13V15H17C17.55 15 18 14.55 18 14ZM16.5 13.5H14.5V10.5H16.5V13.5Z"
        fill="currentColor"
      />
      <path
        d="M20 4H4C2.89 4 2 4.9 2 6V18C2 19.1 2.89 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V6H20V18Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconSd;
