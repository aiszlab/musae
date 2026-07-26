import React from "react";
import { withIcon } from "../../hoc";

const IconRememberMe = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M17 1H7C5.9 1 5 1.9 5 3V21C5 22.1 5.9 23 7 23H17C18.1 23 19 22.1 19 21V3C19 1.9 18.1 1 17 1ZM17 21H7V20H17V21ZM17 18H7V17.52C8.47 16.53 10.22 16 12 16C13.78 16 15.53 16.53 17 17.52V18ZM17 15.21C15.5 14.44 13.8 14 12 14C10.2 14 8.5 14.44 7 15.21V6H17V15.21ZM17 4H7V3H17V4Z"
        fill="currentColor"
      />
      <path
        d="M12 13C13.66 13 15 11.66 15 10C15 8.34 13.66 7 12 7C10.34 7 9 8.34 9 10C9 11.66 10.34 13 12 13ZM12 9C12.55 9 13 9.45 13 10C13 10.55 12.55 11 12 11C11.45 11 11 10.55 11 10C11 9.45 11.45 9 12 9Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconRememberMe;
