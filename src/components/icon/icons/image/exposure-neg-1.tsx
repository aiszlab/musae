import React from "react";
import { withIcon } from "../../hoc";

const IconExposureNeg1 = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M4.5 10.5V12.5H12.5V10.5H4.5ZM19.5 17.5H17.5V6.88L14.5 7.9V6.2L19.2 4.5H19.5V17.5Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconExposureNeg1;
