import React from "react";
import { withIcon } from "../../hoc";

const IconSwipeRight = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M18.89 13.77L15.09 12.1C14.96 12.04 14.81 12 14.65 12H14V7.5C14 6.12 12.88 5 11.5 5C10.12 5 9 6.12 9 7.5V15.65L7.13 15.25C6.94 15.22 6.11 15.1 5.4 15.81L4 17.22L9.12 22.41C9.49 22.79 10 23 10.53 23H17.08C18.06 23 18.89 22.3 19.05 21.33L19.97 15.89C20.12 15.03 19.68 14.17 18.89 13.77ZM17.08 21H10.53L6.83 17.22L11 18.11V7.5C11 7.22 11.22 7 11.5 7C11.78 7 12 7.22 12 7.5V13.68H13.76L18 15.56L17.08 21ZM12 2.5C7.26 2.5 4.33 5.02 3.57 7H2C2.73 4.12 6.51 1 12 1C15.22 1 18.18 2.13 20.5 4.02V2H22V7H17V5.5H19.91C17.79 3.64 15.03 2.5 12 2.5Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconSwipeRight;
