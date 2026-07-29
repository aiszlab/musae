import React from "react";
import { withIcon } from "../../hoc";

const IconPark = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M16.95 12H18.95L11.95 2L5.00005 12H6.95005L3.05005 18H9.97005V22H13.92V18H20.95L16.95 12ZM6.74005 16L10.64 10H8.83005L11.96 5.5L15.11 10H13.21L17.21 16H6.74005Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconPark;
