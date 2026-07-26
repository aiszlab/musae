import React from "react";
import { withIcon } from "../../hoc";

const IconSimCardDownload = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M18 2H10L4 8V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM18 4V20H6V8.83L10.83 4H18Z"
        fill="currentColor"
      />
      <path
        d="M16 13L12 17L8 13L9.41 11.59L11 13.17V9.02L13 9V13.17L14.59 11.58L16 13Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconSimCardDownload;
