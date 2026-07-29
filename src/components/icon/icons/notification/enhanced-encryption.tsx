import React from "react";
import { withIcon } from "../../hoc";

const IconEnhancedEncryption = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M18 8.5H17V6.5C17 3.74 14.76 1.5 12 1.5C9.24 1.5 7 3.74 7 6.5V8.5H6C4.9 8.5 4 9.4 4 10.5V20.5C4 21.6 4.9 22.5 6 22.5H18C19.1 22.5 20 21.6 20 20.5V10.5C20 9.4 19.1 8.5 18 8.5ZM8.9 6.5C8.9 4.79 10.29 3.4 12 3.4C13.71 3.4 15.1 4.79 15.1 6.5V8.5H8.9V6.5ZM18 20.5H6V10.5H18V20.5ZM13 11.5H11V14.5H8V16.5H11V19.5H13V16.5H16V14.5H13V11.5Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconEnhancedEncryption;
