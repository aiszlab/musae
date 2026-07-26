import React from "react";
import { withIcon } from "../../hoc";

const IconFilterHdr = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M13.9999 0.9999L9.7799 6.6299L11.0299 8.2999L13.9999 4.3299L18.9999 10.9999H10.5399L6.5299 5.6299L0.9999 12.9999H22.9999L13.9999 0.9999ZM4.9999 10.9999L6.5199 8.9699L8.0399 10.9999H4.9999Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconFilterHdr;
