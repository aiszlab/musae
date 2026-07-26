import React from "react";
import { withIcon } from "../../hoc";

const IconMedication = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M10.5 15H8V12H10.5V9.5H13.5V12H16V15H13.5V17.5H10.5V15ZM19 8V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V8C5 6.9 5.9 6 7 6H17C18.1 6 19 6.9 19 8ZM17 8H7V19H17V8ZM18 3H6V5H18V3Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconMedication;
