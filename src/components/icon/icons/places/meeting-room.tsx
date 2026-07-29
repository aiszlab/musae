import React from "react";
import { withIcon } from "../../hoc";

const IconMeetingRoom = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M19 19V4H15V3H5V19H3V21H15V6H17V21H21V19H19ZM13 19H7V5H13V19ZM10 11H12V13H10V11Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconMeetingRoom;
