import React from "react";
import { withIcon } from "../../hoc";

const Swipe = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M20.5 2V4.02C18.18 2.13 15.22 1 12 1C8.78 1 5.82 2.13 3.5 4.02V2H2V7H7V5.5H4.09C6.2 3.64 8.97 2.5 12 2.5C15.03 2.5 17.79 3.64 19.91 5.5H17V7H22V2H20.5Z"
        fill="currentColor"
      />
      <path
        d="M18.89 13.77L15.09 12.1C14.96 12.04 14.81 12 14.65 12H14V7.63C14 6.31 13.04 5.13 11.73 5.01C10.25 4.88 9 6.05 9 7.5V15.65L7.13 15.25C6.94 15.22 6.11 15.1 5.4 15.81L4 17.22L9.12 22.41C9.49 22.79 10 23 10.53 23H17.08C18.06 23 18.89 22.3 19.05 21.33L19.97 15.89C20.12 15.03 19.68 14.17 18.89 13.77ZM18 15.56L17.08 21H10.53L6.83 17.22L11 18.11V7.5C11 7.22 11.22 7 11.5 7C11.78 7 12 7.22 12 7.5V13.68H13.76L18 15.56Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default Swipe;
