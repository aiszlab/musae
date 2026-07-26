import React from "react";
import { withIcon } from "../../hoc";

const IconFastRewind = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M18.75 9.86V14.14L15.72 12L18.75 9.86ZM9.75 9.86V14.14L6.72 12L9.75 9.86ZM20.75 6L12.25 12L20.75 18V6ZM11.75 6L3.25 12L11.75 18V6Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconFastRewind;
