import React from "react";
import { withIcon } from "../../hoc";

const IconHotel = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M7 13.5C8.66 13.5 10 12.16 10 10.5C10 8.84 8.66 7.5 7 7.5C5.34 7.5 4 8.84 4 10.5C4 12.16 5.34 13.5 7 13.5ZM7 9.5C7.55 9.5 8 9.95 8 10.5C8 11.05 7.55 11.5 7 11.5C6.45 11.5 6 11.05 6 10.5C6 9.95 6.45 9.5 7 9.5ZM19 6.5H11V14.5H3V4.5H1V19.5H3V16.5H21V19.5H23V10.5C23 8.29 21.21 6.5 19 6.5ZM21 14.5H13V8.5H19C20.1 8.5 21 9.4 21 10.5V14.5Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconHotel;
