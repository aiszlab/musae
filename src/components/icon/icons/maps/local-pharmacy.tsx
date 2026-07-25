import React from "react";
import { withIcon } from "../../hoc";

const LocalPharmacy = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(1.2, 0) scale(1.2)">
        <path
          d="M18 4H15.36L16.5 0.86L14.15 0L12.69 4H0V6L2 12L0 18V20H18V18L16 12L18 6V4ZM15.89 18H2.11L4.11 12L2.11 6H15.89L13.89 12L15.89 18ZM10 8H8V11H5V13H8V16H10V13H13V11H10V8Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default LocalPharmacy;
