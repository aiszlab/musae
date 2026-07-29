import React from "react";
import { withIcon } from "../../hoc";

const IconDesk = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M2 6V18H4V8H14V18H16V16H20V18H22V6H2ZM20 8V10H16V8H20ZM16 14V12H20V14H16Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconDesk;
