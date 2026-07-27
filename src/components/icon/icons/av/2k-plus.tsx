import React from "react";
import { withIcon } from "../../hoc";

const Icon2kPlus = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 11.5H17.5V10H16.5V11.5H15V12.5H16.5V14H17.5V12.5H19V19H5V5H19V11.5Z"
        fill="currentColor"
      />
      <path
        d="M10 13.5H7.5V12.5H9C9.55 12.5 10 12.05 10 11.5V10C10 9.45 9.55 9 9 9H6V10.5H8.5V11.5H7C6.45 11.5 6 11.95 6 12.5V15H10V13.5Z"
        fill="currentColor"
      />
      <path
        d="M12.5 12.75L14.25 15H16L13.75 12L16 9H14.25L12.5 11.25V9H11V15H12.5V12.75Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default Icon2kPlus;
