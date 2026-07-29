import React from "react";
import { withIcon } from "../../hoc";

const IconOutbox = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M11 9.83V14H13V9.83L14.59 11.41L16 10L12 6L8 10L9.41 11.41L11 9.83Z"
        fill="currentColor"
      />
      <path
        d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V16H8.02C8.93 17.21 10.37 18 12 18C13.63 18 15.06 17.21 15.98 16H19V19ZM19 14H14.82C14.41 15.16 13.31 16 12 16C10.69 16 9.6 15.16 9.18 14H5V5H19V14Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconOutbox;
