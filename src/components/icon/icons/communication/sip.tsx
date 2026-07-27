import React from "react";
import { withIcon } from "../../hoc";

const IconSip = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4ZM4 6V18H20V6H4ZM11 9H13V15H11V9ZM14 9H18C18.55 9 19 9.45 19 10V12C19 12.55 18.55 13 18 13H15.5V15H14V9ZM17.5 10.5H15.5V11.5H17.5V10.5ZM6.5 11.25H9C9.55 11.25 10 11.7 10 12.25V14C10 14.55 9.55 15 9 15H5V13.5H8.5V12.75H6C5.45 12.75 5 12.3 5 11.75V10C5 9.45 5.45 9 6 9H10V10.5H6.5V11.25Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconSip;
