import React from "react";
import { withIcon } from "../../hoc";

const IconDetails = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 2L2 20H22L12 2ZM13 7.92L18.6 18H13V7.92ZM11 7.92V18H5.4L11 7.92Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconDetails;
