import React from "react";
import { withIcon } from "../../hoc";

const IconAlignHorizontalLeft = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M4 22H2V2H4V22ZM22 7H6V10H22V7ZM16 14H6V17H16V14Z" fill="currentColor" />
    </svg>
  );
});

export default IconAlignHorizontalLeft;
