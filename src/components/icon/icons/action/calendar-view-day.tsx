import React from "react";
import { withIcon } from "../../hoc";

const IconCalendarViewDay = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M3 16.5H21V18.5H3V16.5ZM19 11.5V12.5H5V11.5H19ZM21 9.5H3V14.5H21V9.5ZM3 5.5H21V7.5H3V5.5Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconCalendarViewDay;
