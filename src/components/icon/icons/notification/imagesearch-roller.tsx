import React from "react";
import { withIcon } from "../../hoc";

const IconImagesearchRoller = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M21 6.5V2.5C21 1.95 20.55 1.5 20 1.5H8C7.45 1.5 7 1.95 7 2.5V3.5H5C3.9 3.5 3 4.4 3 5.5V9.5C3 10.6 3.9 11.5 5 11.5H13V14.5H12C11.45 14.5 11 14.95 11 15.5V21.5C11 22.05 11.45 22.5 12 22.5H16C16.55 22.5 17 22.05 17 21.5V15.5C17 14.95 16.55 14.5 16 14.5H15V11.5C15 10.4 14.1 9.5 13 9.5H5V5.5H7V6.5C7 7.05 7.45 7.5 8 7.5H20C20.55 7.5 21 7.05 21 6.5ZM9 3.5H19V5.5H9V3.5ZM15 20.5H13V16.5H15V20.5Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconImagesearchRoller;
