import React from "react";
import { withIcon } from "../../hoc";

const IconRectangle = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M2 4V20H22V4H2ZM20 18H4V6H20V18Z" fill="currentColor" />
    </svg>
  );
});

export default IconRectangle;
