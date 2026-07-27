import React from "react";
import { withIcon } from "../../hoc";

const IconLooks = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M11.9999 4.9999C8.1399 4.9999 4.9999 8.1399 4.9999 11.9999H6.9999C6.9999 9.2399 9.2399 6.9999 11.9999 6.9999C14.7599 6.9999 16.9999 9.2399 16.9999 11.9999H18.9999C18.9999 8.1399 15.8599 4.9999 11.9999 4.9999ZM11.9999 0.9999C5.9299 0.9999 0.9999 5.9299 0.9999 11.9999H2.9999C2.9999 7.0399 7.0399 2.9999 11.9999 2.9999C16.9599 2.9999 20.9999 7.0399 20.9999 11.9999H22.9999C22.9999 5.9299 18.0699 0.9999 11.9999 0.9999Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconLooks;
