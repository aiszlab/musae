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
        d="M12 3L2 21H22L12 3ZM13 8.92L18.6 19H13V8.92ZM11 8.92V19H5.4L11 8.92Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconDetails;
