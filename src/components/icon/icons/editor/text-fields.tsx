import React from "react";
import { withIcon } from "../../hoc";

const IconTextFields = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M2.5 4.5V7.5H7.5V19.5H10.5V7.5H15.5V4.5H2.5ZM21.5 9.5H12.5V12.5H15.5V19.5H18.5V12.5H21.5V9.5Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconTextFields;
