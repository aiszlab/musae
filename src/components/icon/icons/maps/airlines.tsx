import React from "react";
import { withIcon } from "../../hoc";

const IconAirlines = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M17.34 18H5.8L14.05 6H19.59L17.34 18ZM13 4L2 20H19L22 4H13ZM14.5 9C13.12 9 12 10.12 12 11.5C12 12.88 13.12 14 14.5 14C15.88 14 17 12.88 17 11.5C17 10.12 15.88 9 14.5 9Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconAirlines;
