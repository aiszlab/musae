import React from "react";
import { withIcon } from "../../hoc";

const IconRestaurant = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M16 6V14H19V22H21V2C18.24 2 16 4.24 16 6ZM11 9H9V2H7V9H5V2H3V9C3 11.21 4.79 13 7 13V22H9V13C11.21 13 13 11.21 13 9V2H11V9Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconRestaurant;
