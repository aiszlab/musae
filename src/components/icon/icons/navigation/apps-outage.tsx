import React from "react";
import { withIcon } from "../../hoc";

const IconAppsOutage = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M0 8H4V4H0V8ZM6 20H10V16H6V20ZM0 20H4V16H0V20ZM0 14H4V10H0V14ZM6 14H10V10H6V14ZM12 20H16V16H12V20ZM15 0C12.24 0 10 2.24 10 5C10 7.76 12.24 10 15 10C17.76 10 20 7.76 20 5C20 2.24 17.76 0 15 0ZM15.5 8H14.5V7H15.5V8ZM15.5 6H14.5V2H15.5V6ZM12 14H16V11.93C15.67 11.98 15.34 12 15 12C13.93 12 12.91 11.76 12 11.32V14ZM6 4V8H8.68C8.24 7.09 8 6.07 8 5C8 4.66 8.02 4.33 8.07 4H6Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconAppsOutage;
