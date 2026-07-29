import React from "react";
import { withIcon } from "../../hoc";

const IconTurnSlightLeft = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M13.16 4H7.5V9.66H9.5V7.41L14.5 12.41V20H16.5V12.42C16.5 11.89 16.29 11.38 15.91 11.01L10.91 6.01H13.16V4Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconTurnSlightLeft;
