import React from "react";
import { withIcon } from "../../hoc";

const IconTour = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M20 4H6V2H4V22H6V14H20L18 9L20 4ZM16.14 9.74L17.04 12H6V6H17.05L16.15 8.26L15.85 9L16.14 9.74ZM13 9C13 10.1 12.1 11 11 11C9.9 11 9 10.1 9 9C9 7.9 9.9 7 11 7C12.1 7 13 7.9 13 9Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconTour;
