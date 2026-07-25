import React from "react";
import { withIcon } from "../../hoc";

const NoteAlt = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(1.2, 0) scale(1.2)">
        <path
          d="M16 2H11.82C11.4 0.84 10.3 0 9 0C7.7 0 6.6 0.84 6.18 2H2C0.9 2 0 2.9 0 4V18C0 19.1 0.9 20 2 20H16C17.1 20 18 19.1 18 18V4C18 2.9 17.1 2 16 2ZM9 1.75C9.41 1.75 9.75 2.09 9.75 2.5C9.75 2.91 9.41 3.25 9 3.25C8.59 3.25 8.25 2.91 8.25 2.5C8.25 2.09 8.59 1.75 9 1.75ZM16 18H2V4H16V18Z"
          fill="currentColor"
        />
        <path d="M12.08 10.03L9.96 7.91L4 13.86V16H6.1L12.08 10.03Z" fill="currentColor" />
        <path
          d="M13.85 8.27C14.05 8.07 14.05 7.76 13.85 7.56L12.44 6.15C12.24 5.95 11.93 5.95 11.73 6.15L10.67 7.21L12.79 9.33L13.85 8.27Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default NoteAlt;
