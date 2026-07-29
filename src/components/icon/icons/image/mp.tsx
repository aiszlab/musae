import React from "react";
import { withIcon } from "../../hoc";

const IconMp = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M17 9H13.5V15H15V13.5H17C17.55 13.5 18 13.05 18 12.5V10C18 9.45 17.55 9 17 9ZM16.5 12H15V10.5H16.5V12Z"
        fill="currentColor"
      />
      <path
        d="M11.5 9H7C6.45 9 6 9.45 6 10V15H7.5V10.5H8.5V13.5H10V10.5H11V15H12.5V10C12.5 9.45 12.05 9 11.5 9Z"
        fill="currentColor"
      />
      <path
        d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM5 19V5H19V19H5Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconMp;
