import React from "react";
import { withIcon } from "../../hoc";

const IconCallMissed = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M19.59 6.79492L12 14.3849L6.41 8.79492H11V6.79492H3V14.7949H5V10.2049L12 17.2049L21 8.20492L19.59 6.79492Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconCallMissed;
