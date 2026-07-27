import React from "react";
import { withIcon } from "../../hoc";

const IconAccessAlarm = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M22 5.7897L17.4 1.9297L16.11 3.4597L20.71 7.3197L22 5.7897ZM7.88 3.4597L6.6 1.9297L2 5.7797L3.29 7.3097L7.88 3.4597ZM12.5 8.0697H11V14.0697L15.75 16.9197L16.5 15.6897L12.5 13.3197V8.0697ZM12 4.0697C7.03 4.0697 3 8.0997 3 13.0697C3 18.0397 7.02 22.0697 12 22.0697C16.97 22.0697 21 18.0397 21 13.0697C21 8.0997 16.97 4.0697 12 4.0697ZM12 20.0697C8.13 20.0697 5 16.9397 5 13.0697C5 9.1997 8.13 6.0697 12 6.0697C15.87 6.0697 19 9.1997 19 13.0697C19 16.9397 15.87 20.0697 12 20.0697Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconAccessAlarm;
