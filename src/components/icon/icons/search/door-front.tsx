import React from "react";
import { withIcon } from "../../hoc";

const IconDoorFront = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M19 19V5C19 3.9 18.1 3 17 3H7C5.9 3 5 3.9 5 5V19H3V21H21V19H19ZM17 19H7V5H17V19ZM13 11H15V13H13V11Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconDoorFront;
