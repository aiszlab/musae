import React from "react";
import { withIcon } from "../../hoc";

const IconFolderCopy = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M3 19.5H20V21.5H3C1.9 21.5 1 20.6 1 19.5V6.5H3V19.5ZM23 6.5V15.5C23 16.6 22.1 17.5 21 17.5H7C5.9 17.5 5 16.6 5 15.5L5.01 4.5C5.01 3.4 5.9 2.5 7 2.5H12L14 4.5H21C22.1 4.5 23 5.4 23 6.5ZM7 15.5H21V6.5H13.17L11.17 4.5H7V15.5Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconFolderCopy;
