import React from "react";
import { withIcon } from "../../hoc";

const PermMedia = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M2 6H0V11H0.01L0 20C0 21.1 0.9 22 2 22H20V20H2V6ZM7 15H21L17.5 10.5L15 13.51L11.5 9L7 15ZM22 4H14L12 2H6C4.9 2 4.01 2.9 4.01 4L4 16C4 17.1 4.9 18 6 18H22C23.1 18 24 17.1 24 16V6C24 4.9 23.1 4 22 4ZM22 16H6V4H11.17L13.17 6H22V16Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default PermMedia;
