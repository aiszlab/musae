import React from "react";
import { withIcon } from "../../hoc";

const IconViewDay = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M2 3V6H21V3H20H4H3H2ZM20 8H3H2V21H3H20H21V8H20ZM8 19H4V10H8V19ZM14 19H10V10H14V19ZM20 19H16V10H20V19Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconViewDay;
