import React from "react";
import { withIcon } from "../../hoc";

const ChangeHistory = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M12 7.77L18.39 18H5.61L12 7.77ZM12 4L2 20H22L12 4Z" fill="currentColor" />
    </svg>
  );
});

export default ChangeHistory;
