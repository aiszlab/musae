import React from "react";
import { withIcon } from "../../hoc";

const IconFireHydrantAlt = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 10.5C10.07 10.5 8.5 12.07 8.5 14C8.5 15.93 10.07 17.5 12 17.5C13.93 17.5 15.5 15.93 15.5 14C15.5 12.07 13.93 10.5 12 10.5ZM12 15.5C11.17 15.5 10.5 14.83 10.5 14C10.5 13.17 11.17 12.5 12 12.5C12.83 12.5 13.5 13.17 13.5 14C13.5 14.83 12.83 15.5 12 15.5Z"
        fill="currentColor"
      />
      <path
        d="M19 11H18V8H20V6H17.65C16.83 3.67 14.61 2 12 2C9.39 2 7.17 3.67 6.35 6H4V8H6V11H5C3.9 11 3 11.9 3 13V15C3 16.1 3.9 17 5 17H6V20H4V22H20V20H18V17H19C20.1 17 21 16.1 21 15V13C21 11.9 20.1 11 19 11ZM12 4C13.47 4 14.75 4.81 15.44 6H8.56C9.25 4.81 10.53 4 12 4ZM19 15H16V20H8V15H5V13H8V8H16V13H19V15Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconFireHydrantAlt;
