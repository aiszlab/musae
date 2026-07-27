import React from "react";
import { withIcon } from "../../hoc";

const IconCrop = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M16.9999 14.9999H18.9999V6.9999C18.9999 5.8999 18.0999 4.9999 16.9999 4.9999H8.9999V6.9999H16.9999V14.9999ZM6.9999 16.9999V0.9999H4.9999V4.9999H0.9999V6.9999H4.9999V16.9999C4.9999 18.0999 5.8999 18.9999 6.9999 18.9999H16.9999V22.9999H18.9999V18.9999H22.9999V16.9999H6.9999Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconCrop;
