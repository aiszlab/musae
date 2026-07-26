import React from "react";
import { withIcon } from "../../hoc";

const IconRawOn = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M6.26 2.76H2.76V8.76H4.26V6.76H5.36L6.26 8.76H7.76L6.86 6.66C7.36 6.36 7.76 5.86 7.76 5.26V4.26C7.76 3.46 7.06 2.76 6.26 2.76ZM6.26 5.26H4.26V4.26H6.26V5.26Z"
        fill="currentColor"
      />
      <path
        d="M10.01 2.76L8.51 8.76H10.01L10.39 7.26H12.14L12.51 8.76H14.01L12.51 2.76H10.01ZM10.76 5.76L11.01 4.76H11.51L11.76 5.76H10.76Z"
        fill="currentColor"
      />
      <path
        d="M19.74 2.76L19 5.76L18.26 2.76H16.74L16 5.76L15.26 2.76H13.76L15.26 8.76H16.74L17.5 5.72L18.26 8.76H19.74L21.24 2.76H19.74Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconRawOn;
