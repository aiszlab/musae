import React from "react";
import { withIcon } from "../../hoc";

const IconUTurnLeft = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M19.5 9V21H17.5V9C17.5 6.79 15.71 5 13.5 5C11.29 5 9.5 6.79 9.5 9V13.17L11.09 11.58L12.5 13L8.5 17L4.5 13L5.91 11.59L7.5 13.17V9C7.5 5.69 10.19 3 13.5 3C16.81 3 19.5 5.69 19.5 9Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconUTurnLeft;
