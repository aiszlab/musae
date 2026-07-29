import React from "react";
import { withIcon } from "../../hoc";

const IconScoreboard = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M18 10H15.5C14.95 10 14.5 10.45 14.5 11V15C14.5 15.55 14.95 16 15.5 16H18C18.55 16 19 15.55 19 15V11C19 10.45 18.55 10 18 10ZM17.5 14.5H16V11.5H17.5V14.5ZM9.5 16H5V13.5C5 12.95 5.45 12.5 6 12.5H8V11.5H5V10H8.5C9.05 10 9.5 10.45 9.5 11V12.5C9.5 13.05 9.05 13.5 8.5 13.5H6.5V14.5H9.5V16ZM12.75 12H11.25V10.5H12.75V12ZM12.75 15.5H11.25V14H12.75V15.5ZM22 7V19C22 20.1 21.1 21 20 21H4C2.9 21 2 20.1 2 19V7C2 5.9 2.9 5 4 5H7V3H9V5H15V3H17V5H20C21.1 5 22 5.9 22 7ZM20 19V7H12.75V8.5H11.25V7H4V19H11.25V17.5H12.75V19H20Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconScoreboard;
