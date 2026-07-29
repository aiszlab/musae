import React from "react";
import { withIcon } from "../../hoc";

const IconWaterDamage = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 3.5L2 12.5H5V20.5H19V12.5H22L12 3.5ZM7 18.5V10.69L12 6.19L17 10.69V18.5H7ZM14 14.5C14 15.6 13.1 16.5 12 16.5C10.9 16.5 10 15.6 10 14.5C10 13.4 12 10.5 12 10.5C12 10.5 14 13.4 14 14.5Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconWaterDamage;
