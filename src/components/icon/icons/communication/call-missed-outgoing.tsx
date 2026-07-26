import React from "react";
import { withIcon } from "../../hoc";

const IconCallMissedOutgoing = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M3 8.20492L12 17.2049L19 10.2049V14.7949H21V6.79492H13V8.79492H17.59L12 14.3849L4.41 6.79492L3 8.20492Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconCallMissedOutgoing;
