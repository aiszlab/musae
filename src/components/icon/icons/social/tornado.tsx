import React from "react";
import { withIcon } from "../../hoc";

const IconTornado = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M23 2.5H1L12 21.5L23 2.5ZM19.53 4.5L17.79 7.5H6.21L4.47 4.5H19.53ZM10.26 14.5H13.74L12 17.51L10.26 14.5ZM14.9 12.5H9.1L7.36 9.5H16.63L14.9 12.5Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconTornado;
