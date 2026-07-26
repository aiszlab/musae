import React from "react";
import { withIcon } from "../../hoc";

const IconGrid4X4 = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M22 7V5H19V2H17V5H13V2H11V5H7V2H5V5H2V7H5V11H2V13H5V17H2V19H5V22H7V19H11V22H13V19H17V22H19V19H22V17H19V13H22V11H19V7H22ZM7 7H11V11H7V7ZM7 17V13H11V17H7ZM17 17H13V13H17V17ZM17 11H13V7H17V11Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconGrid4X4;
