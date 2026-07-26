import React from "react";
import { withIcon } from "../../hoc";

const IconFilterFrames = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M18.9999 4.9999H14.9999L10.9999 0.9999L6.9999 4.9999H2.9999C1.8999 4.9999 0.9999 5.8999 0.9999 6.9999V20.9999C0.9999 22.0999 1.8999 22.9999 2.9999 22.9999H18.9999C20.0999 22.9999 20.9999 22.0999 20.9999 20.9999V6.9999C20.9999 5.8999 20.0999 4.9999 18.9999 4.9999ZM18.9999 20.9999H2.9999V6.9999H7.5199L11.0399 3.4999L14.5199 6.9999H18.9999V20.9999ZM4.9999 18.9999H16.9999V8.9999H4.9999V18.9999ZM6.9999 10.9999H14.9999V16.9999H6.9999V10.9999Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconFilterFrames;
