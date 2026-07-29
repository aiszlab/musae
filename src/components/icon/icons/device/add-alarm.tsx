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
        d="M7.88 3.45969L6.6 1.92969L2 5.77969L3.29 7.30969L7.88 3.45969ZM22 5.78969L17.4 1.92969L16.11 3.45969L20.71 7.31969L22 5.78969ZM12 4.06969C7.03 4.06969 3 8.09969 3 13.0697C3 18.0397 7.02 22.0697 12 22.0697C16.97 22.0697 21 18.0397 21 13.0697C21 8.09969 16.97 4.06969 12 4.06969ZM12 20.0697C8.13 20.0697 5 16.9397 5 13.0697C5 9.19969 8.13 6.06969 12 6.06969C15.87 6.06969 19 9.19969 19 13.0697C19 16.9397 15.87 20.0697 12 20.0697ZM13 9.06969H11V12.0697H8V14.0697H11V17.0697H13V14.0697H16V12.0697H13V9.06969Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconAddAlarm;
