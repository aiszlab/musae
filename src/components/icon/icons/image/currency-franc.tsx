import React from "react";
import { withIcon } from "../../hoc";

const IconCurrencyFranc = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M18.5 5V3H7.5V16H5.5V18H7.5V21H9.5V18H13.5V16H9.5V13H17.5V11H9.5V5H18.5Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconCurrencyFranc;
