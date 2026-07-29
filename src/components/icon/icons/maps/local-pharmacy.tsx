import React from "react";
import { withIcon } from "../../hoc";

const IconLocalPharmacy = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M21 6H18.36L19.5 2.86L17.15 2L15.69 6H3V8L5 14L3 20V22H21V20L19 14L21 8V6ZM18.89 20H5.11L7.11 14L5.11 8H18.89L16.89 14L18.89 20ZM13 10H11V13H8V15H11V18H13V15H16V13H13V10Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconLocalPharmacy;
