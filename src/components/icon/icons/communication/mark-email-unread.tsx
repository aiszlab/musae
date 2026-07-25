import React from "react";
import { withIcon } from "../../hoc";

const MarkEmailUnread = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 1.2) scale(1.2)">
        <path
          d="M20 6.98V16C20 17.1 19.1 18 18 18H2C0.9 18 0 17.1 0 16L0.00999999 4C0.00999999 2.9 0.9 2 2 2H12.1C12.04 2.32 12 2.66 12 3C12 3.34 12.04 3.68 12.1 4H2L10 9L13.67 6.71C14.14 7.14 14.69 7.47 15.3 7.69L10 11L2 6V16H18V7.9C18.74 7.75 19.42 7.42 20 6.98ZM14 3C14 4.66 15.34 6 17 6C18.66 6 20 4.66 20 3C20 1.34 18.66 0 17 0C15.34 0 14 1.34 14 3Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default MarkEmailUnread;
