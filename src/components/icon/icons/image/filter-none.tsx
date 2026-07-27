import React from "react";
import { withIcon } from "../../hoc";

const IconFilterNone = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M2.9999 4.9999H0.9999V20.9999C0.9999 22.0999 1.8999 22.9999 2.9999 22.9999H18.9999V20.9999H2.9999V4.9999ZM20.9999 0.9999H6.9999C5.8999 0.9999 4.9999 1.8999 4.9999 2.9999V16.9999C4.9999 18.0999 5.8999 18.9999 6.9999 18.9999H20.9999C22.0999 18.9999 22.9999 18.0999 22.9999 16.9999V2.9999C22.9999 1.8999 22.0999 0.9999 20.9999 0.9999ZM20.9999 16.9999H6.9999V2.9999H20.9999V16.9999Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconFilterNone;
