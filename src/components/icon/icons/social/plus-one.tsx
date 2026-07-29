import React from "react";
import { withIcon } from "../../hoc";

const IconPlusOne = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M10.5 8.5H8.5V12.5H4.5V14.5H8.5V18.5H10.5V14.5H14.5V12.5H10.5V8.5ZM15 6.58V8.4L17.5 7.9V18.5H19.5V5.5L15 6.58Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconPlusOne;
