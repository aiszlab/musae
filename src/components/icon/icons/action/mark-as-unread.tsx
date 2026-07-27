import React from "react";
import { withIcon } from "../../hoc";

const IconMarkAsUnread = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M16.23 7.5H18.83C18.77 7.03 18.47 6.56 18.04 6.33L10.5 2.5L2.8 6.33C2.32 6.59 2 7.14 2 7.67V15.5C2 16.6 2.9 17.5 4 17.5V7.9L10.5 4.5L16.23 7.5Z"
        fill="currentColor"
      />
      <path
        d="M20 8.5H7C5.9 8.5 5 9.4 5 10.5V19.5C5 20.6 5.9 21.5 7 21.5H20C21.1 21.5 22 20.6 22 19.5V10.5C22 9.4 21.1 8.5 20 8.5ZM20 19.5H7V12.5L13.5 15.83L20 12.5V19.5ZM13.5 13.83L7 10.5H20L13.5 13.83Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconMarkAsUnread;
