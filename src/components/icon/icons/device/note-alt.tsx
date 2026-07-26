import React from "react";
import { withIcon } from "../../hoc";

const IconNoteAlt = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M19 4H14.82C14.4 2.84 13.3 2 12 2C10.7 2 9.6 2.84 9.18 4H5C3.9 4 3 4.9 3 6V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM12 3.75C12.41 3.75 12.75 4.09 12.75 4.5C12.75 4.91 12.41 5.25 12 5.25C11.59 5.25 11.25 4.91 11.25 4.5C11.25 4.09 11.59 3.75 12 3.75ZM19 20H5V6H19V20Z"
        fill="currentColor"
      />
      <path d="M15.08 12.03L12.96 9.91L7 15.86V18H9.1L15.08 12.03Z" fill="currentColor" />
      <path
        d="M16.85 10.27C17.05 10.07 17.05 9.76 16.85 9.56L15.44 8.15C15.24 7.95 14.93 7.95 14.73 8.15L13.67 9.21L15.79 11.33L16.85 10.27Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconNoteAlt;
