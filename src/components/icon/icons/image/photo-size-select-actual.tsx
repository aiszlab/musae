import React from "react";
import { withIcon } from "../../hoc";

const IconPhotoSizeSelectActual = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M20.9999 0.9999H2.9999C1.9999 0.9999 0.9999 1.9999 0.9999 2.9999V16.9999C0.9999 18.0999 1.8999 18.9999 2.9999 18.9999H20.9999C21.9999 18.9999 22.9999 17.9999 22.9999 16.9999V2.9999C22.9999 1.9999 21.9999 0.9999 20.9999 0.9999ZM20.9999 16.9199C20.9799 16.9499 20.9399 16.9799 20.9199 16.9999H2.9999V3.0799L3.0799 2.9999H20.9099C20.9399 3.0199 20.9699 3.0599 20.9899 3.0799V16.9199H20.9999ZM10.9999 13.5099L8.4999 10.4999L4.9999 14.9999H18.9999L14.4999 8.9999L10.9999 13.5099Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconPhotoSizeSelectActual;
