import React from "react";
import { withIcon } from "../../hoc";

const IconLiveHelp = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M19 1.5H5C3.89 1.5 3 2.4 3 3.5V17.5C3 18.6 3.89 19.5 5 19.5H9L12 22.5L15 19.5H19C20.1 19.5 21 18.6 21 17.5V3.5C21 2.4 20.1 1.5 19 1.5ZM19 17.5H14.17L12 19.67L9.83 17.5H5V3.5H19V17.5ZM11 14.5H13V16.5H11V14.5ZM12 6.5C13.1 6.5 14 7.4 14 8.5C14 10.5 11 10.25 11 13.5H13C13 11.25 16 11 16 8.5C16 6.29 14.21 4.5 12 4.5C9.79 4.5 8 6.29 8 8.5H10C10 7.4 10.9 6.5 12 6.5Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconLiveHelp;
