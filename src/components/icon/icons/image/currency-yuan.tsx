import React from "react";
import { withIcon } from "../../hoc";

const IconCurrencyYuan = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M13.28 12H18V14H13V21H11V14H6V12H10.72L5 3H7.37L12 10.29L16.63 3H19L13.28 12Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconCurrencyYuan;
