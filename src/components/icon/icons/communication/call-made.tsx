import React from "react";
import { withIcon } from "../../hoc";

const IconCallMade = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M9.5 4.5V6.5H16.09L4.5 18.09L5.91 19.5L17.5 7.91V14.5H19.5V4.5H9.5Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconCallMade;
