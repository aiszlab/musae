import React from "react";
import { withIcon } from "../../hoc";

const IconCases = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M2.9999 8.9999H0.9999V19.9999C0.9999 21.1099 1.8899 21.9999 2.9999 21.9999H19.9999V19.9999H2.9999V8.9999Z"
        fill="currentColor"
      />
      <path
        d="M17.9999 4.9999V2.9999C17.9999 1.8999 17.0999 0.9999 15.9999 0.9999H11.9999C10.8999 0.9999 9.9999 1.8999 9.9999 2.9999V4.9999H4.9999V15.9999C4.9999 17.0999 5.8999 17.9999 6.9999 17.9999H20.9999C22.0999 17.9999 22.9999 17.0999 22.9999 15.9999V4.9999H17.9999ZM11.9999 2.9999H15.9999V4.9999H11.9999V2.9999ZM20.9999 15.9999H6.9999V6.9999H20.9999V15.9999Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconCases;
