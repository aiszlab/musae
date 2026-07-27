import React from "react";
import { withIcon } from "../../hoc";

const IconViewCozy = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fill="currentColor"
        d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V6H20V18Z"
      />
      <path
        d="M12.75 15.5H15.5V12.75H17V15.5H19.75V17H17V19.75H15.5V17H12.75V15.5ZM4.25 9H9.5V14.25H4.25V9ZM5.75 10.5V12.75H8V10.5H5.75Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconViewCozy;
