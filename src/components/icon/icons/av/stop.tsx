import React from "react";
import { withIcon } from "../../hoc";

const IconStop = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M16 8V16H8V8H16ZM18 6H6V18H18V6Z" fill="currentColor" />
    </svg>
  );
});

export default IconStop;
