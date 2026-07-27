import React from "react";
import { withIcon } from "../../hoc";

const IconVerticalDistribute = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M22 2V4H2V2H22ZM7 10.5V13.5H17V10.5H7ZM2 20V22H22V20H2Z" fill="currentColor" />
    </svg>
  );
});

export default IconVerticalDistribute;
