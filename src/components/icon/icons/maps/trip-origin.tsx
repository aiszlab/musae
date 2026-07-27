import React from "react";
import { withIcon } from "../../hoc";

const IconTripOrigin = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 0 12 C 0 5.376 5.376 0 12 0 C 18.624 0 24 5.376 24 12 C 24 18.624 18.624 24 12 24 C 5.376 24 0 18.624 0 12ZM 12 19.2 C 15.972 19.2 19.2 15.972 19.2 12 C 19.2 8.028 15.972 4.8 12 4.8 C 8.028 4.8 4.8 8.028 4.8 12 C 4.8 15.972 8.028 19.2 12 19.2Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconTripOrigin;
