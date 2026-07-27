import React from "react";
import { withIcon } from "../../hoc";

const IconNoteAdd = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M13 11H11V14H8V16H11V19H13V16H16V14H13V11ZM14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconNoteAdd;
