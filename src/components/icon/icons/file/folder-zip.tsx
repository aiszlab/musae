import React from "react";
import { withIcon } from "../../hoc";

const IconFolderZip = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M20 6H12L10 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6ZM16 16H18V14H16V12H18V10H16V8H20V18H16V16ZM16 16H14V18H4V6H9.17L11.17 8H14V10H16V12H14V14H16V16Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconFolderZip;
