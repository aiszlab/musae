import React from "react";
import { withIcon } from "../../hoc";

const IconPolyline = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M15 16V17.26L9 14.26V11.09L11.7 8H16V2H10V6.9L7.3 10H3V16H8L15 19.5V22H21V16H15ZM12 4H14V6H12V4ZM7 14H5V12H7V14ZM19 20H17V18H19V20Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconPolyline;
