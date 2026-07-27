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
        d="M9.21 10.79H11V15.79H13V10.79H14.79L12 7.79L9.21 10.79ZM19 3.79H5C3.9 3.79 3 4.69 3 5.79V19.79C3 20.69 3.9 21.79 5 21.79H19C20.1 21.79 21 20.69 21 19.79V5.79C21 4.69 20.1 3.79 19 3.79ZM19 19.79H5V5.79H19V19.79ZM11 9.79H13V10.79H11V9.79Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconOutbox;
