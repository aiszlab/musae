import React from "react";
import { withIcon } from "../../hoc";

const LocalLaundryService = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(2.4, 0) scale(1.2)">
        <path
          d="M14 0.00999999L2 0C0.89 0 0 0.89 0 2V18C0 19.11 0.89 20 2 20H14C15.11 20 16 19.11 16 18V2C16 0.89 15.11 0.00999999 14 0.00999999ZM14 18H2L1.99 2H14V18Z"
          fill="currentColor"
        />
        <path
          d="M4 5C4.55228 5 5 4.55228 5 4C5 3.44772 4.55228 3 4 3C3.44772 3 3 3.44772 3 4C3 4.55228 3.44772 5 4 5Z"
          fill="currentColor"
        />
        <path
          d="M7 5C7.55228 5 8 4.55228 8 4C8 3.44772 7.55228 3 7 3C6.44772 3 6 3.44772 6 4C6 4.55228 6.44772 5 7 5Z"
          fill="currentColor"
        />
        <path
          d="M8 17C10.76 17 13 14.76 13 12C13 9.24 10.76 7 8 7C5.24 7 3 9.24 3 12C3 14.76 5.24 17 8 17ZM10.36 9.64C11.66 10.94 11.66 13.06 10.36 14.36C9.06 15.66 6.94 15.66 5.64 14.36L10.36 9.64Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default LocalLaundryService;
