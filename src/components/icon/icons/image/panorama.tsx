import React from "react";
import { withIcon } from "../../hoc";

const IconPanorama = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M20.9999 0.9999H2.9999C1.8999 0.9999 0.9999 1.8999 0.9999 2.9999V14.9999C0.9999 16.0999 1.8999 16.9999 2.9999 16.9999H20.9999C22.0999 16.9999 22.9999 16.0999 22.9999 14.9999V2.9999C22.9999 1.8999 22.0999 0.9999 20.9999 0.9999ZM20.9999 14.9999H2.9999V2.9999H20.9999V14.9999ZM14.4999 7.9999L10.9999 12.5099L8.4999 9.4999L4.9999 13.9999H18.9999L14.4999 7.9999Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconPanorama;
