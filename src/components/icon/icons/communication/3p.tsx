import React from "react";
import { withIcon } from "../../hoc";

const Icon3p = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M20 2H4.01C2.91 2 2.01 2.9 2.01 4L2 22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H5.17L4 17.17V4H20V16ZM12 10C13.1 10 14 9.1 14 8C14 6.9 13.1 6 12 6C10.9 6 10 6.9 10 8C10 9.1 10.9 10 12 10ZM16 13.43C16 12.62 15.52 11.9 14.78 11.58C13.93 11.21 12.99 11 12 11C11.01 11 10.07 11.21 9.22 11.58C8.48 11.9 8 12.62 8 13.43V14H16V13.43Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default Icon3p;
