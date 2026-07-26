import React from "react";
import { withIcon } from "../../hoc";

const IconDirectionsTransit = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 2.5C8 2.5 4 3 4 6.5V16C4 17.93 5.57 19.5 7.5 19.5L6 21V21.5H18V21L16.5 19.5C18.43 19.5 20 17.93 20 16V6.5C20 3 16.42 2.5 12 2.5ZM17.66 5.5H6.43C7.04 4.98 8.49 4.5 12 4.5C15.71 4.5 17.12 4.96 17.66 5.5ZM11 7.5V10.5H6V7.5H11ZM13 7.5H18V10.5H13V7.5ZM16.5 17.5H7.5C6.67 17.5 6 16.83 6 16V12.5H18V16C18 16.83 17.33 17.5 16.5 17.5Z"
        fill="currentColor"
      />
      <path
        d="M8.5 16.5C9.32843 16.5 10 15.8284 10 15C10 14.1716 9.32843 13.5 8.5 13.5C7.67157 13.5 7 14.1716 7 15C7 15.8284 7.67157 16.5 8.5 16.5Z"
        fill="currentColor"
      />
      <path
        d="M15.5 16.5C16.3284 16.5 17 15.8284 17 15C17 14.1716 16.3284 13.5 15.5 13.5C14.6716 13.5 14 14.1716 14 15C14 15.8284 14.6716 16.5 15.5 16.5Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconDirectionsTransit;
