import React from "react";
import { withIcon } from "../../hoc";

const IconCompare = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M7.9999 2.9999H2.9999C1.8999 2.9999 0.9999 3.8999 0.9999 4.9999V18.9999C0.9999 20.0999 1.8999 20.9999 2.9999 20.9999H7.9999V22.9999H9.9999V0.9999H7.9999V2.9999ZM7.9999 17.9999H2.9999L7.9999 11.9999V17.9999ZM16.9999 2.9999H11.9999V4.9999H16.9999V17.9999L11.9999 11.9999V20.9999H16.9999C18.0999 20.9999 18.9999 20.0999 18.9999 18.9999V4.9999C18.9999 3.8999 18.0999 2.9999 16.9999 2.9999Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconCompare;
