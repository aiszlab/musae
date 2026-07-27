import React from "react";
import { withIcon } from "../../hoc";

const IconAddAlarm = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M7.88 3.46L6.6 1.93L2 5.78L3.29 7.31L7.88 3.46ZM22 5.79L17.4 1.93L16.11 3.46L20.71 7.32L22 5.79ZM12 4.07C7.03 4.07 3 8.1 3 13.07C3 18.04 7.02 22.07 12 22.07C16.97 22.07 21 18.04 21 13.07C21 8.1 16.97 4.07 12 4.07ZM12 20.07C8.13 20.07 5 16.94 5 13.07C5 9.2 8.13 6.07 12 6.07C15.87 6.07 19 9.2 19 13.07C19 16.94 15.87 20.07 12 20.07ZM13 9.07H11V12.07H8V14.07H11V17.07H13V14.07H16V12.07H13V9.07Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconAddAlarm;
