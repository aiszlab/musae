import React from "react";
import { withIcon } from "../../hoc";

const Icon1kPlus = withIcon(({ size }) => {
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
      <path d="M7.5 15H9V9H6V10.5H7.5V15Z" fill="currentColor" />
      <path
        d="M12 12.75L13.75 15H15.5L13.25 12L15.5 9H13.75L12 11.25V9H10.5V15H12V12.75Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default Icon1kPlus;
