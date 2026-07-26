import React from "react";
import { withIcon } from "../../hoc";

const IconStraighten = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M20.9999 0.9999H2.9999C1.8999 0.9999 0.9999 1.8999 0.9999 2.9999V10.9999C0.9999 12.0999 1.8999 12.9999 2.9999 12.9999H20.9999C22.0999 12.9999 22.9999 12.0999 22.9999 10.9999V2.9999C22.9999 1.8999 22.0999 0.9999 20.9999 0.9999ZM20.9999 10.9999H2.9999V2.9999H4.9999V6.9999H6.9999V2.9999H8.9999V6.9999H10.9999V2.9999H12.9999V6.9999H14.9999V2.9999H16.9999V6.9999H18.9999V2.9999H20.9999V10.9999Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconStraighten;
