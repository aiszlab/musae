import React from "react";
import { withIcon } from "../../hoc";

const AccountBalance = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M7 11H5V18H7V11ZM13 11H11V18H13V11ZM21.5 20H2.5V22H21.5V20ZM19 11H17V18H19V11ZM12 4.26L17.21 7H6.79L12 4.26ZM12 2L2.5 7V9H21.5V7L12 2Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default AccountBalance;
