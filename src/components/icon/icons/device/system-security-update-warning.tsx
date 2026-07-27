import React from "react";
import { withIcon } from "../../hoc";

const IconSystemSecurityUpdateWarning = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M13 15H11V17H13V15Z" fill="currentColor" />
      <path d="M13 7H11V13H13V7Z" fill="currentColor" />
      <path
        d="M17 1.01L7 1C5.9 1 5 1.9 5 3V21C5 22.1 5.9 23 7 23H17C18.1 23 19 22.1 19 21V3C19 1.9 18.1 1.01 17 1.01ZM17 21H7V20H17V21ZM17 18H7V6H17V18ZM17 4H7V3H17V4Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconSystemSecurityUpdateWarning;
