import React from "react";
import { withIcon } from "../../hoc";

const IconTransform = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M20.9999 17.9999V15.9999H6.9999V3.9999H8.9999L5.9999 0.9999L2.9999 3.9999H4.9999V5.9999H0.9999V7.9999H4.9999V15.9999C4.9999 17.0999 5.8999 17.9999 6.9999 17.9999H14.9999V19.9999H12.9999L15.9999 22.9999L18.9999 19.9999H16.9999V17.9999H20.9999ZM8.9999 7.9999H14.9999V13.9999H16.9999V7.9999C16.9999 6.8999 16.0999 5.9999 14.9999 5.9999H8.9999V7.9999Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconTransform;
